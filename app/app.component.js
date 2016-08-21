System.register(['angular2/core', 'angular2/router', 'app/registracija/registracija.component', 'app/login/login.component', 'app/mainpage/mainpage.component', 'app/sobe/sobe.component', 'app/dodaj/dodaj.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, registracija_component_1, login_component_1, mainpage_component_1, sobe_component_1, dodaj_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (registracija_component_1_1) {
                registracija_component_1 = registracija_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            },
            function (sobe_component_1_1) {
                sobe_component_1 = sobe_component_1_1;
            },
            function (dodaj_component_1_1) {
                dodaj_component_1 = dodaj_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                        }
                        else {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token");
                    this.router.navigate(['./MainPage']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    else {
                        this.isAuth = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/registracija', name: 'Registracija', component: registracija_component_1.RegistracijaComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/sobe', name: 'Sobe', component: sobe_component_1.Sobe },
                        { path: '/dodaj', name: 'Dodaj', component: dodaj_component_1.Dodaj },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map