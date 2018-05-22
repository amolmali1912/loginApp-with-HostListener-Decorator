import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _user: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._user.getUserLoggedIn();
  }
}
