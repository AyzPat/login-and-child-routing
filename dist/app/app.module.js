"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var authmanager_1 = require('./authmanager');
var app_component_1 = require('./app.component');
var login_1 = require('./login');
var home_1 = require('./home');
//import {Home1Component } from './home1';
var authentication_service_1 = require('./authentication.service');
// import {ErrorComponent} from './error';
var about_1 = require('./about');
var app_routing_1 = require('./app.routing');
var link1_1 = require('./link1');
var link2_1 = require('./link2');
var dash_1 = require('./dash');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [app_routing_1.routing, platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, home_1.HomeComponent, login_1.LoginComponent, about_1.AboutComponent, link1_1.Link1Component, link2_1.Link2Component, dash_1.DashComponent],
            providers: [app_routing_1.appRoutingProviders, authentication_service_1.AuthenticationService, authmanager_1.AuthManager],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map