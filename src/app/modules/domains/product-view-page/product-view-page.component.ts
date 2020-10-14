import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '@services/product.service';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  productData: IProduct;
  productId: number;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.getProductDataById();
  }

  getProductIdFromRoute() {
    if (this.route?.snapshot?.params?.id) {
      this.productId = this.route?.snapshot?.params?.id;
    }
  }

  getProductDataById() {
    this.productService.getProductData(this.productId).subscribe((data) => {
      this.productData = data;
    });
  }
}
