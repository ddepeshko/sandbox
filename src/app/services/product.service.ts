import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '@models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductsList(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>('http://localhost:4200/products');
  }
}
