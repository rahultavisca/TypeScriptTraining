import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-directive',
  templateUrl: './select.directive.view.html'
})
export class SelectDirectiveComponent implements OnInit {
  private _DataSource: Array<any>;
  showList : boolean = false;
  // an event that will be emitted
  // with payload as generic data
  // in this case data type is 'any'
  @Output()
  onRowSelected: EventEmitter<any>;

  constructor() {
      this._DataSource = new Array<any>();
      this.onRowSelected  =new EventEmitter<any>();
  }

  @Input()
  set DataSource(val: Array<any>) {
     if(val.length > 0) {
       this._DataSource = val;
     }
  }

  get DataSource(): Array<any> {
    return this._DataSource;
  }

  selectCategory(r: any) {
    // emit() method will emit an event
    this.onRowSelected.emit(r);
  }

  select() {
    if(this.showList == false){
      this.showList = true;
    }
    else{
      this.showList = false;
    }
  }

  ngOnInit(): void { }
}