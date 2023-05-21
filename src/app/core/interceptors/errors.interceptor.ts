import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message: string = '';
        if (error.status === 401) message = 'No posee permisos suficientes.';
        else if (error.status === 403) message = 'Acceso prohibido.';
        else if (error.status === 404) message = 'Registro no encontrado.';
        else message = 'Ha ocurrido un error inesperado.';
        return throwError(() => error);
      })
    );
  }
}
