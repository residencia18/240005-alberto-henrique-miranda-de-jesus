// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario = new BehaviorSubject<Usuario>(new Usuario('', '', '', new Date()));

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdMx4W6KU8JJ8TZXhB0t8_pSDpU93kU_4',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          const expiracaoData = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const usuario = new Usuario(
            resData.email,
            resData.localId,
            resData.idToken,
            expiracaoData
          );
          console.log(usuario);
          this.usuario.next(usuario);
          localStorage.setItem('userData', JSON.stringify(usuario));
        })
      );
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdMx4W6KU8JJ8TZXhB0t8_pSDpU93kU_4',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          const expiracaoData = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const usuario = new Usuario(
            resData.email,
            resData.localId,
            resData.idToken,
            expiracaoData
          );

          this.usuario.next(usuario);
          localStorage.setItem('userData', JSON.stringify(usuario));
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') as string);
    if (!userData) {
      return;
    }

    const loadedUser = new Usuario(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.usuario.next(loadedUser);
    }
  }

  logout() {
    this.usuario.next(new Usuario('', '', '', new Date()));
  }
}
