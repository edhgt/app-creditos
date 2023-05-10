import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './../services/token.service';

const SET_TOKEN = new HttpContextToken<boolean>(() => true);

export function setToken(isSet: boolean) {
  return new HttpContext().set(SET_TOKEN, isSet);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(SET_TOKEN)) {
      request = this.addToken(request);
      return next.handle(request);
    }

    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>) {
    
    const token = this.tokenService.getToken();
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return authReq;
    }
    return request;
  }
}
