import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListPageComponent} from './products-list-page.component';
import {ProductListItemComponent} from './components/product-list-item/product-list-item.component';
import {ProductListViewComponent} from './components/product-list-view/product-list-view.component';
import {ProductListPageRoutingModule} from './product-list-page-routing.module';


@NgModule({
  declarations: [ProductsListPageComponent, ProductListItemComponent, ProductListViewComponent],
  imports: [
    CommonModule,
    ProductListPageRoutingModule
  ]
})
export class ProductsListPageModule {
}
