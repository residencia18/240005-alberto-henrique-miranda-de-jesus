import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const userData = localStorage.getItem('userData');
    let isAuth = false;

    if (userData) {
      const user = JSON.parse(userData);
      isAuth = !!user._token;
    }

    if (isAuth) {
      return this.router.createUrlTree(['']);
    }
    return this.router.createUrlTree(['login']);
  }
}
