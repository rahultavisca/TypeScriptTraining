import {Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from '../services/app.htttp.service';

// Directive properties
// selector: the custom attribute name that will be applied on
// UI element. If the attribute is used for property binding then
// the selector will have proprty binding syntax [<SELECTOR-NAME>]

// use the following classes for HTML Element Reference and the Rendering
// ElementRef: Class to refer HTML element to apply directive
// Renderer2 : Class to define rendering based on the directive

@Directive({
  selector: '[productId]'
})
export class UniqueDirective {
   constructor(private ele: ElementRef, private renderer: Renderer2, private serv: HttpService){
   }

   // define input property for the directive that will accept data
   // from HTML element using Property Binding
   // IMP** --> This property must map with directive selector
   // e.g. <div [setColor]="<value>"></div>

   @Input('productId') productId: string;

   // logic for directive
   private checkUnique(productId: string): void {
      if(productId.length > 0) {
          this.serv.get().subscribe((data) => {
            console.log(`received response ${JSON.stringify(data)}`);
            if(data.find(p => p.ProductId == productId)) {
                this.renderer.setStyle(this.ele.nativeElement,
                    'border-color',
                    'red');
            }
            else {
                this.renderer.setStyle(this.ele.nativeElement,
                    'border-color',
                    '');
            }
         }, (error) => {
           console.log(`error in response ${error}`);
         });
      }
      
   }

   // host events inside the directive those will cause the
   // directive to be executed / activated and its logic to execute

   @HostListener('blur')
   onblur(): void {
     this.checkUnique(this.productId);
   }
}