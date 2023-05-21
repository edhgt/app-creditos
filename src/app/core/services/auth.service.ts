import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Credentials } from 'src/app/auth/core/models/credential.model';
import { Auth } from '../models/auth.model';
import { User } from './../models/user.model';
import { TokenService } from './../services/token.service';
import { setToken } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/v1`;
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(credentials: Credentials) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, credentials, { context: setToken(false) })
    .pipe(
      tap(response => {
        this.tokenService.saveToken(response.access_token);
      })
    );
  }

  getProfile() {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   Authorization: `Bearer ${this.tokenService.getToken()}`,
    // });
    return this.http.get<User>(`${this.apiUrl}/me`)
    .pipe(
      tap(user => this.user.next(user))
    );
  }

  loginAndGetProfile(credentials: Credentials) {
    return this.login(credentials)
    .pipe(
      switchMap(() => this.getProfile()),
    );
  }

  logout() {
    return this.http.post('logout', {}).pipe(
      tap(() => this.tokenService.removeToken())
    );
  }
}
