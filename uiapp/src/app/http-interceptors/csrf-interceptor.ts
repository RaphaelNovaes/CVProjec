import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  constructor(private csrfExtract: HttpXsrfTokenExtractor) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get csrf from the cookie.
    const csrf = <string>this.csrfExtract.getToken()?.toString() || '';
    // Clone the request and replace the original headers with
    // cloned headers, updated with csrf.
    const csrfReq = req.clone({
      headers: req.headers.set('X-XSRF-TOKEN', csrf),
      withCredentials: true,
    });

    // send cloned request with header to the next handler.
    return next.handle(csrfReq);
  }
}
