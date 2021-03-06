import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AngularFireAuth,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.auth.idToken.pipe(
      switchMap(token => {
        const decoratedRequest = request.clone({
          setHeaders: { 'Authorization': `Bearer ${token}` }
        });
        return next.handle(decoratedRequest)
      }),
    );
  }
}
