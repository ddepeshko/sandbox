import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListPageComponent} from './products-list-page.component';
import {ProductListItemComponent} from './components/product-list-item/product-list-item.component';
import {AppProductListViewComponent} from './components/app-product-list-view/app-product-list-view.component';
import {ProductListViewComponent} from './components/product-list-view/product-list-view.component';


@NgModule({
  declarations: [ProductsListPageComponent, ProductListItemComponent, AppProductListViewComponent, ProductListViewComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsListPageModule {
}
