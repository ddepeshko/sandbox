import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  productData: IProduct;
  productId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  getProductIdFromRoute() {
    if (this.route?.snapshot?.params?.id) {
      this.productId = this.route?.snapshot?.params?.id;
      console.log(this.productId);
    }
  }
}
