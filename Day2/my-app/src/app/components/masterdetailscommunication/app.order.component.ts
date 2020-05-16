import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../../models/app.models';
import { Orders } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-order-component',
  template: `
     <table *ngIf="filteredOrders && filteredOrders.length > 0">
       <thead>
         <tr>
         <th>OrderId</th>
         <th>OrderName</th>
         <th>Date</th>
         <th>CustomerId</th>
         <th>OrderQuanity</th>
         <th>Amount</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let o of filteredOrders">
         <td>{{o.OrderId}}</td>
         <td>{{o.OrderName}}</td>
        <td>{{o.Date}}</td>
        <td>{{o.CustomerId}}</td>
        <td>{{o.OrderQuantity}}</td>
        <td>{{o.Amount}}</td>
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

export class OrderComponent implements OnInit, AfterViewInit {
  orders = Orders;
  customerIds: Array<number>;
  customerId: number;
  _filteredOrders: Array<Order>;
  constructor(private serv: CommunicationService, private cdr: ChangeDetectorRef) {
    this.customerIds = new Array<number>();
    this.customerId = 0;
    this._filteredOrders = new Array<Order>();
    console.log('Constructor Called');
  }
    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }
  // receiver will subscribe to the event from the service
  // and receiv data from the event
  ngOnInit() {
      console.log('in ngOnInit() method')
      this.serv.emitValue.subscribe((data) => {
          console.log(`The Received value is ${data}`);
          this.customerId = data;
      });

      this.serv.emitCustomerChange.subscribe((data) => {
        console.log(`The Received value is ${data}`);
        this.customerIds = new Array<number>();
        data.forEach(element => {
            this.customerIds.push(element);
        });
    });
  }

  // when the deptno property is changed
  // the component will be updated
  // component will update all propertis inside it
  // and updated values will be Exposed to UI
  get filteredOrders() : Array<Order> {
    this._filteredOrders = new Array<Order>();
    if (this.customerId > 0) {
        this.customerIds = new Array<number>();
        this._filteredOrders = this.orders.filter((o,i) => {
          return o.CustomerId === this.customerId;
        });
     }
    if (this.customerIds.length > 0) {
        this.customerId = 0;
       this._filteredOrders = this.orders.filter((o,i) => {
         return this.customerIds.includes(o.CustomerId);
       });
    }
    return this._filteredOrders;
  }
}