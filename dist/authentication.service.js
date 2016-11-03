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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
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
    var authenticatedUser = users.find((function (u) { return u.username === user.username; }));
    var authenticatedpassword = users.find((function (u) { return u.password === user.password; }));
    if (authenticatedUser && authenticatedpassword) {
        localStorage.setItem("user", user);
        window.localStorage.setItem('auth_key', user.token);
        router.navigate(['app']);
        return true;
    }
    else if (!authenticatedUser) {
        alert('wrong username');
        return false;
    }
    else if (authenticatedUser && (!authenticatedpassword)) {
        alert('wrong password');
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
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map