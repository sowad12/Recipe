import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../_service/auth.service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private route:Router){}
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.authService.user$.pipe(
      take(1),
      map(user=>{
        const isAuth = !!user;
        if (isAuth) {
          console.log("excute")
          return true;
        }       
         return this.route.createUrlTree['/auth'];
      })
   )
 }
}
