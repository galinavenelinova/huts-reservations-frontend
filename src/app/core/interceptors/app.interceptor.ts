import {Injectable, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, EMPTY, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

const apiURL = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');
    if (req.clone().url.endsWith('image-upload')) {
      req = req.clone({
        headers: req.headers.set('Authorization', idToken)
      });
    } else if (idToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', idToken).set('Content-Type', 'application/json')
      });
    }

    return next.handle(req);
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
