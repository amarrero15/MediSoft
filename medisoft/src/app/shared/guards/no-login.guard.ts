import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  constructor(private AFauth: AngularFireAuth, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AFauth.authState.pipe(map(auth=>{
        if(auth===null || auth===undefined){
          return true;
        }else{
          this.route.navigate(['inicio']);
          return false;
        }
      }))
    //return true;
  }
  
}
