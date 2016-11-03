import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthManager} from './authmanager'
import { LoginComponent } from './login';
import { HomeComponent } from './home';

import { AboutComponent } from './about';
import { Link1Component } from './link1';
import { Link2Component } from './link2';
import { DashComponent } from './dash';
import { ContactComponent } from './contact';



const  appRoutes: Routes = [
 
 


{ path: 'app', component:DashComponent,canActivate:[AuthManager] ,
children:[
  {path:'home',component:HomeComponent},
  {path:'home',component:HomeComponent,
children:[

{path:'link1',component:Link1Component},
{path:'link2',component:Link2Component}
]},
  
 {path:'contact',component:ContactComponent},

  {path:'about',component:AboutComponent,
children:[
{path:'',redirectTo:'app/about/link1'},
{path:'link1',component:Link1Component},
{path:'link2',component:Link2Component}
]},
// {path:'',redirectTo:'app/home'}
]
},
 {path:'app/about',redirectTo:'app/about/link1'},
  { path: 'login', component: LoginComponent , canActivate:[AuthManager]   },
{path:'app', redirectTo:'app/home'},
//{path:'**', redirectTo:'app/home'},

  
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   
   {path:'app/contact',redirectTo:'app/contact',canActivate:[AuthManager] },
  
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
