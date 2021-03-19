import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {IUser} from './shared/user.model';
import {Router} from '@angular/router';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  currentUser: IUser | null;
  jwtToken: string;

  get isLogged(): boolean {
    return localStorage.getItem('id_token') !== null;
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`${apiUrl}/users/profile`, {withCredentials: true})
      .pipe(
        tap((user: IUser) => this.currentUser = user),
        catchError(() => {
          this.currentUser = null;
          return of(null);
        })
      );
  }

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/login', data, {withCredentials: true, observe: 'response'}).pipe(
      tap((res) => {
        this.currentUser = res.body;
        const jwtToken = res.headers.get('Authorization');
        localStorage.setItem('id_token', jwtToken);
        console.log('currentUser: ' + this.currentUser.username);
        console.log('currentUser.role: ' + this.currentUser.role);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`, data, {withCredentials: true}).pipe(
      tap((user: IUser) => {
        // this.currentUser = user;
        console.log('registered user: ' + this.currentUser);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:8080/logout', {}, {withCredentials: true}).pipe(
      tap(() => {
        this.currentUser = null;
        localStorage.removeItem('id_token');
        this.router.navigate(['/user/login']);
      })
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.post(`${apiUrl}/users/profile`, data, {withCredentials: true}).pipe(
      tap((user: IUser) => {
        this.currentUser = user;
      })
    );
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${apiUrl}/users/list`);
  }
}
