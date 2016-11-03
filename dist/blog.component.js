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
var users_service_1 = require('./users.service');
var BlogComponent = (function () {
    function BlogComponent(_userService) {
        this._userService = _userService;
        this.data = "Paris is a beautiful city with very fun and interesting things to see and do. There are many interesting sights. There are wonderful restaurants and food. Elegant restaurants and casual sidewalk cafes lie throughout the city. This beautiful city is also the fashion capital of the world. Paris is a fantastic city that holds the key to your heart! This exciting city has many wonderful sights. One of the most well known sights is the Eiffel Tower. From the top of this magnificent structure it is possible to see all across the lovely city. On the Champs-Elysees you can see the Arc de Triumph which soldiers were buried beneath a war. The most popular museum in France, and perhaps the world, is the Louvre. The Louvre contains historical paintings, sculptures and other forms of art such as the Mona Lisa and the Venis de Milo. Pei's Pyramids at the Louvre are beautiful glass pyramids outside of the museum. Notre Dame is a gorgeous cathedral known for its bell tower. Sacre Coeur is another breathtaking cathedral set atop a tall hill. From this church there is a great view of the city. Louis the sixteenth lived in and expanded the astoundingly beautiful Palace of Versailles in 1669. The palace is still standing and is as beautiful as ever! The palace's gardens are very beautiful as well. Mont Mart is a large shopping area. There are clothing stores, bakeries, wine shops, souvenir shops, restaurants and more. Parisian sights are as interesting and beautiful as they are fun!    ";
    }
    BlogComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (Users) { return _this.Users = Users; });
    };
    BlogComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog',
            templateUrl: 'app/blog.template.html',
            providers: [users_service_1.UserService],
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map