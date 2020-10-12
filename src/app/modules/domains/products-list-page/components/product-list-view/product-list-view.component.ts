import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  products: Array<IProduct>;
  constructor() {
  }

  ngOnInit(): void {
  }

}
