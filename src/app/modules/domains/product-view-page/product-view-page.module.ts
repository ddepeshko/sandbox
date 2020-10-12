import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductViewPageComponent} from './product-view-page.component';
import {ProductViewComponent} from './components/product-view/product-view.component';
import {ProductViewPageRoutingModule} from './product-view-page-routing.module';


@NgModule({
  declarations: [ProductViewPageComponent, ProductViewComponent],
  imports: [
    CommonModule,
    ProductViewPageRoutingModule
  ]
})
export class ProductViewPageModule {
}
