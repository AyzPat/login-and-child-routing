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
var authentication_service_1 = require('./authentication.service');
var router_1 = require('@angular/router');
var DashComponent = (function () {
    function DashComponent(_service, route) {
        this._service = _service;
        this.route = route;
    }
    DashComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    DashComponent.prototype.logout = function () {
        this._service.logout();
    };
    DashComponent = __decorate([
        core_1.Component({
            selector: 'dash',
            templateUrl: 'app/dash.html',
            providers: [authentication_service_1.AuthenticationService],
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.ActivatedRoute])
    ], DashComponent);
    return DashComponent;
}());
exports.DashComponent = DashComponent;
//# sourceMappingURL=dash.js.map