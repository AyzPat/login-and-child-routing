import {Component,Input} from '@angular/core'
import { AuthenticationService  } from './authentication.service'
import {ActivatedRoute} from '@angular/router'

@Component ({
    selector:'dash',
    templateUrl:'app/dash.html'
   
,
    providers: [AuthenticationService],
    })
    export class DashComponent{

    constructor(
            private _service:AuthenticationService,private route: ActivatedRoute){}

        ngOnInit(){
            this._service.checkCredentials();


        }


        logout() {
            this._service.logout();
        }

    
    }
        
