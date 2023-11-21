import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../interfeces/auth-rest';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../enums/ls-keys';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  get email(): string {
    return localStorage.getItem(LocalStorageKeys.EMAIL);
  }

  get token(): string {
    const date = localStorage.getItem(LocalStorageKeys.DATE_EXP);

    if (!date) {
      return null;
    }

    if (new Date() > new Date(date)) {
      this.logout();

      return null;
    }

    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  }

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient
  ) {}

  signIn(email: string, password: string) {
    return this.httpClient.post<AuthResponse>(
      `${environment.localUrl}/sign-up`,
      { email, password, returnSecureToken: true },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      tap((res: AuthResponse) => {
        const { idToken, expiresIn, email } = res;
        if (!idToken || !expiresIn) {
          return null;
        }

        const dateExp: Date = new Date (new Date().getTime() + +expiresIn * 100000);
        localStorage.setItem(LocalStorageKeys.EMAIL, email);
        localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, idToken);
        localStorage.setItem(LocalStorageKeys.DATE_EXP, dateExp.toString());
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.router.navigateByUrl('');
    localStorage.clear();
  }
}
