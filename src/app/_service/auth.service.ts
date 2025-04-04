import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { AuthResponse } from '../_models/auth/auth-response.model';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient,private route:Router) {}

  register(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZWciwySzaA_eOY1orhELAPeZzm3J_37Q',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
            catchError(this.handleError), 
            tap(res=>this.handleAuth(res))
          );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZWciwySzaA_eOY1orhELAPeZzm3J_37Q',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
            catchError(this.handleError), 
            tap(res=>this.handleAuth(res))
          );
  }
  logout(){
    this.user$.next(null);
    localStorage.removeItem('user');
    this.route.navigate(['/auth']);
    //if user logout manually it is possible setTimeOut tokenExpirationTimer running on background.so we need to clear it
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  
  autoLogin(){
    const localStorageUser: User | null = JSON.parse(localStorage.getItem('user') || 'null') as User | null;
    if(!localStorageUser)return;
    const user = new User(localStorageUser.email, localStorageUser.id, localStorageUser._token, new Date(localStorageUser._tokenExpirationDate));
    if (user._token) {
      this.user$.next(user);
      const expirationDuration = new Date(user._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }

  }
  autoLogout(expirationDuration: number){
    //store setTimeOut reference
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuth(res: AuthResponse) {
    const expirationDate = new Date(
      new Date().getTime() + +res.expiresIn * 1000
    );
    const user = new User(res.email, res.localId, res.idToken, expirationDate);
    this.user$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
 
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
