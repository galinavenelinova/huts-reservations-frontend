import { Injectable, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

const apiURL = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');
    if (idToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', idToken).set('Content-Type', 'application/json')
      });
    }

    return next.handle(req);

    // return next.handle(req).pipe(
    //   map(e => {
    //     // if (e instanceof HttpResponse && e.url.includes('login')) {
    //     //   const authToken = e.headers.get('Authentication');
    //     // }
    //
    //     return e;
    //   }),
    //   catchError(err => {
    //     console.error(err);
    //     // push this error back into the stream so the other
    //     // error handlers can handle it
    //     return of(err);
    //     // don't push back this error to the stream
    //     // return EMPTY;
    //   })
    // );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}
