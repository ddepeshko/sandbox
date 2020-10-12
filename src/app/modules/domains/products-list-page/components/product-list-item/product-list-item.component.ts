import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() itemData: IProduct;

  constructor() {
  }

  ngOnInit(): void {
  }

}
