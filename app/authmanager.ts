import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthManager implements CanActivate {
    
    constructor(private router: Router) {}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(next.url[0].path == 'login'){
            if(window.localStorage.getItem('auth_key')){
                    this.router.navigate(['app']);
            //    alert('You are already logged in,Please');
                 
                return false;
            }
            else {
                return true;
            }
              
        }
        
       if(window.localStorage.getItem('auth_key')) {
             return true;
         }
        this.router.navigate(['login']);
        alert('You must be logged in');
        
        return false;
    }

}