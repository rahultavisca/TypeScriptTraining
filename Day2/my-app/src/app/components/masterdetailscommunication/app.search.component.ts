import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './app.search.component.veiw.html'
})
export class SearchComponent implements OnInit {
  searchTerm: string;

  constructor(private serv: CommunicationService) {
    this.searchTerm = '';
  }

  ngOnInit() { }

  search() {
      console.log("inside initiateSearch "+ this.searchTerm);
      this.serv.onInitiateSearch(this.searchTerm);
  }

}