import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {PRODUCT_LIST_MOCK} from '@constants/products-list-mock';
import {ProductService} from '@services/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  products: Array<IProduct> = PRODUCT_LIST_MOCK;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProductsList().subscribe((data) => {
      this.products = data;
    });
  }

  updateProductList() {
    this.getProductList();
  }
}
