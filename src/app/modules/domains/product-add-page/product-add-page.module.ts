import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductAddPageComponent} from './product-add-page.component';
import {ProductAddPageViewComponent} from './components/product-add-page-view/product-add-page-view.component';


@NgModule({
  declarations: [ProductAddPageComponent, ProductAddPageViewComponent],
  imports: [
    CommonModule
  ]
})
export class ProductAddPageModule {
}
