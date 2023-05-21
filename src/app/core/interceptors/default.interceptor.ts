import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestClone = request.clone({
      url: `${environment.API_URL}/api/v1/${request.url}`,
      headers: request.headers
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
    });
    return next.handle(requestClone);
  }
}
