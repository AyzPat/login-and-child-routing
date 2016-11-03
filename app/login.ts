import {Component,Input} from '@angular/core'
import { FormsModule }   from '@angular/forms';

import { AuthenticationService, User } from './authentication.service';
@Component ({
    selector:'login',
    templateUrl:'app/login.html',
    providers: [AuthenticationService],
})

export class LoginComponent {
    user=new User('','');
 errorMsg:any;
constructor(
        private _service:AuthenticationService) {}
     



 login() {
         this._service.login(this.user);
    }
}
