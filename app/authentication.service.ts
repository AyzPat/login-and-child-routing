import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';



export class User {
  
  constructor(
    public username: string,
    public password: string) { }
}



function my(router: Router, res, user) {
    var users = res.json();
                
    var authenticatedUser = users.find((u => u.username === user.username)  );
     var authenticatedpassword = users.find((u => u.password === user.password)  );
   
    if (authenticatedUser && authenticatedpassword){
      localStorage.setItem("user", user);
      window.localStorage.setItem('auth_key', user.token);
      router.navigate(['app']);      
      return true;
    }
    
else if(!authenticatedUser) {
      alert('wrong username');
    return false;

}
else if(authenticatedUser && (!authenticatedpassword)) {
      alert('wrong password');
    return false;

}

}

@Injectable()
export class AuthenticationService {
 isAuthenticated: boolean = false;
 
  constructor(
    private _router: Router, private http:Http){}
    

  logout() {
    
    window.localStorage.removeItem('auth_key');
    this._router.navigate(['login']);
  }

  login(user){
    this.http.get('app/users.json')
                .subscribe(res => my(this._router, res, user));
           
                // window.localStorage.setItem('auth_key', user.token);
                this.isAuthenticated = true;
                
  }  

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
       
    }
  }
 
  
 
}