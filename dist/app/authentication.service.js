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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
exports.User = User;
function my(router, res, user) {
    var users = res.json();
    var authenticatedUser = users.find((function (u) { return u.username === user.username; }) && (function (u) { return u.password === user.password; }));
    if (authenticatedUser) {
        localStorage.setItem("user", user);
        window.localStorage.setItem('auth_key', user.token);
        router.navigate(['app']);
        return true;
    }
    else {
        alert('wrong credentials');
        return false;
    }
}
var AuthenticationService = (function () {
    function AuthenticationService(_router, http) {
        this._router = _router;
        this.http = http;
        this.isAuthenticated = false;
    }
    AuthenticationService.prototype.logout = function () {
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        this.http.get('app/users.json')
            .subscribe(function (res) { return my(_this._router, res, user); });
        // window.localStorage.setItem('auth_key', user.token);
        this.isAuthenticated = true;
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var _a, _b;
//# sourceMappingURL=authentication.service.js.map