import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VerifiedAccountGuard implements CanActivate {
  constructor(private AFauth: AngularFireAuth, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AFauth.authState.pipe(map( auth=>{
        if( auth?.emailVerified === false){
          this.route.navigate(['verificacion']);
          return false;
        }else{
          return true;
        }
      }));
  }
  
}
