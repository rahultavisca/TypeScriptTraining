import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/productcompopnent/app.product.component';
import { ProductReactiveFormComponent } from './components/productreactiveformcompopnent/app.productreactiveform.component';
import { TableDirectiveComponent } from './directives/table.component.directive';
import { SelectDirectiveComponent } from './directives/select.component.directive';
import { SimpleElementComponent } from './litelementcomponents/app.simple.element.component';


// import all LitElements from its path
import './litelementapp/app.simpleelement.litelement';
import './litelementapp/app.grid.litelement';

@NgModule({
  declarations: [
    AppComponent, ProductComponent,
    ProductReactiveFormComponent,
    TableDirectiveComponent,
    SelectDirectiveComponent,
    SimpleElementComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [SimpleElementComponent]
})
export class AppModule { }