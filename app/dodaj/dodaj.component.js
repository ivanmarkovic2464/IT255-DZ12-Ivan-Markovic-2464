System.register(['angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router', "angular2/core"], function(exports_1, context_1) {
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
    var common_1, http_1, router_1, core_1;
    var Dodaj;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Dodaj = (function () {
                function Dodaj(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.addForm = builder.group({
                        tipSobe: ["", common_1.Validators.none],
                        kvadrata: ["", common_1.Validators.none],
                        brojKreveta: ["", common_1.Validators.none],
                        pogledNa: ["", common_1.Validators.none],
                    });
                }
                Dodaj.prototype.onAdd = function () {
                    var _this = this;
                    var data = "tipSobe=" + this.addForm.value.tipSobe +
                        "&kvadrata=" + this.addForm.value.kvadrata +
                        "&brojKreveta=" + this.addForm.value.brojKreveta +
                        "&pogledNa=" + this.addForm.value.pogledNa;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/Domaci/IT255-DZ12-Ivan-Markovic-2464/php/addroomservice.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body == "ok") {
                            alert("Uspesno dodovanje sobe");
                            _this.router.parent.navigate(['./Sobe']);
                        }
                        else {
                            alert("Neuspesno dodovanje sobe");
                        }
                    });
                };
                Dodaj = __decorate([
                    core_1.Component({
                        selector: 'Dodaj',
                        templateUrl: 'app/dodaj/dodaj.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], Dodaj);
                return Dodaj;
            }());
            exports_1("Dodaj", Dodaj);
        }
    }
});
//# sourceMappingURL=dodaj.component.js.map