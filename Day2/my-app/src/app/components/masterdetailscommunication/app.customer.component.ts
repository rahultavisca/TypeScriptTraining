import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/app.models';
import { Customers } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-customer-component',
  template: `
     <table>
       <thead>
         <tr>
           <th>CustomerId</th>
           <th>CustomerName</th>
           <th>City</th>
           <th>Email</th>
           <th>ContactNumber</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let c of filteredCustomers" (click)="getSelectedRow(c)">
           <td>{{c.CustomerId}}</td>
           <td>{{c.CustomerName}}</td>
           <td>{{c.City}}</td>
           <td>{{c.Email}}</td>
           <td>{{c.ContactNumber}}</td>
        </tr>
       </tbody>
     </table>
  `,
  styles: [`
  table {
          border-collapse: collapse;
          width: 100%;
      }
      
      th, td {
          text-align: left;
          padding: 8px;
      }
      
      tr:nth-child(even){background-color: #f2f2f2}
      
      th {
          background-color: #4CAF50;
          color: white;
      }`]
})

export class CustomerComponent implements OnInit {
    customers = Customers;
    searchTerm: string;
    _filteredCustomer: Array<Customer>;
  
  constructor(private serv: CommunicationService) {
      this.searchTerm = "";
  }

  ngOnInit() {
    this.serv.emitSearch.subscribe((data) => {
        console.log(`The Received value is ${data}`);
        this.searchTerm = data;
    });
   }


  getSelectedRow(c: Customer): void {
      this.serv.onEmiteValue(c.CustomerId);
  }
  
  get filteredCustomers() : Array<Customer> {
    this._filteredCustomer = new Array<Customer>();
    if (this.searchTerm.length > 0) {
       this._filteredCustomer = this.customers.filter((c,i) => {
         return c.CustomerName.toLocaleLowerCase().startsWith(this.searchTerm.toLocaleLowerCase()) ||
            c.City.toLocaleLowerCase().startsWith(this.searchTerm.toLocaleLowerCase());
       });
    } else {
      this._filteredCustomer = this.customers;
    }
    this.serv.onEmitCustomerChange(this._filteredCustomer.map(c => c.CustomerId));
    return this._filteredCustomer;
  }


}