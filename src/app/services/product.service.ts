import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IProduct} from '@models/product/product';
import {api} from '@constants/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  createProductItem(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${api.products.baseUrl}${api.products.productAddEdit}`, data);
  }

  getProductsList(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(`${api.products.baseUrl}${api.products.productList}`);
  }

  getProductData(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${api.products.baseUrl}${api.products.productActions}`.replace('{id}', String(id)));
  }

  deleteProductItem(id: number): Observable<any> {
    return this.http.delete<IProduct>(`${api.products.baseUrl}${api.products.productActions}`.replace('{id}', String(id)));
  }

  editProductItem(data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${api.products.baseUrl}${api.products.productAddEdit}`, data);
  }

}
