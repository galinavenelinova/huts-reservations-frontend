import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import {IUser} from '../../user/shared/user.model';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    if (this.userService.currentUser === undefined) {
      stream$ = this.userService.getCurrentUserProfile();
    } else {
      stream$ = of(this.userService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === this.userService.isLogged;
      }),
      tap((canContinue) => {
        if (canContinue) { console.log('canContinue: ' + canContinue); return; }
        this.router.navigateByUrl('/user/login');
      }),
    );
  }
}
