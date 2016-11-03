"use strict";
var router_1 = require('@angular/router');
var authmanager_1 = require('./authmanager');
var login_1 = require('./login');
var home_1 = require('./home');
var about_1 = require('./about');
var link1_1 = require('./link1');
var link2_1 = require('./link2');
var dash_1 = require('./dash');
var contact_1 = require('./contact');
var appRoutes = [
    { path: 'app', component: dash_1.DashComponent, canActivate: [authmanager_1.AuthManager],
        children: [
            { path: 'home', component: home_1.HomeComponent },
            { path: 'home', component: home_1.HomeComponent,
                children: [
                    { path: 'link1', component: link1_1.Link1Component },
                    { path: 'link2', component: link2_1.Link2Component }
                ] },
            { path: 'contact', component: contact_1.ContactComponent },
            { path: 'about', component: about_1.AboutComponent,
                children: [
                    { path: '', redirectTo: 'app/about/link1' },
                    { path: 'link1', component: link1_1.Link1Component },
                    { path: 'link2', component: link2_1.Link2Component }
                ] },
        ]
    },
    { path: 'app/about', redirectTo: 'app/about/link1' },
    { path: 'login', component: login_1.LoginComponent, canActivate: [authmanager_1.AuthManager] },
    { path: 'app', redirectTo: 'app/home' },
    //{path:'**', redirectTo:'app/home'},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'app/contact', redirectTo: 'app/contact', canActivate: [authmanager_1.AuthManager] },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map