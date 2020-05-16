import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // the event that will be emitted by sender and
  // will be subscribed by the receiver
    emitValue: EventEmitter<number>;
    emitSearch: EventEmitter<string>;
    emitCustomerChange: EventEmitter<Array<number>>;
    constructor(){
       this.emitValue = new EventEmitter<number>();
       this.emitSearch = new EventEmitter<string>();
       this.emitCustomerChange = new EventEmitter<Array<number>>();
    }
    // method that emits event. This method will be called
    // by sender
    onEmiteValue(data: number): void {
        this.emitValue.emit(data);
    }

    onInitiateSearch(data: string): void {
        this.emitSearch.emit(data);
    }

    onEmitCustomerChange(data: Array<number>): void {
        this.emitCustomerChange.emit(data);
    }
}