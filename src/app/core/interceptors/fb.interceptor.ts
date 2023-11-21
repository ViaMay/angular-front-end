import { Injectable } from '@angular/core';
import { AuthService } from './../../modules/auth/services/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FbInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.authService.token) {
      return next.handle(request);
    }
    const clon: HttpRequest<unknown> = request.clone({
      setParams: {
        auth: this.authService.token
      }
    });
    return next.handle(clon);
  }
}
