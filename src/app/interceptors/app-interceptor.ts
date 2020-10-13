import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as data from '../../db.json';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url === 'http://localhost:4200/products') {
      console.log('Loaded from JSON: ' + req.url);
      return of(new HttpResponse({status: 200, body: (data as any).default}));
    }
    return next.handle(req);
  }
}
