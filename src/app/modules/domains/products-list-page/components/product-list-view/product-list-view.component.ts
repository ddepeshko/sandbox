import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {PRODUCT_LIST_MOCK} from '@constants/products-list-mock';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  products: Array<IProduct> = PRODUCT_LIST_MOCK;
  constructor() {
  }

  ngOnInit(): void {
  }

}
