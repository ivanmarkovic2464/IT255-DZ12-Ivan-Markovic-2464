import { Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import{Component} from "angular2/core";


@Component({

 selector: 'Dodaj',
 templateUrl: 'app/dodaj/dodaj.html',
directives: [FORM_DIRECTIVES],
viewBindings: [FORM_BINDINGS]
})


export class Dodaj {

  addForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router) {
  this.http = http;
  this.router = router;
    this.addForm = builder.group({
     tipSobe: ["", Validators.none],
     kvadrata: ["", Validators.none],
     brojKreveta: ["", Validators.none],
     pogledNa: ["", Validators.none],
   });
  }

  onAdd(): void {
  var data = "tipSobe="+this.addForm.value.tipSobe+
			"&kvadrata="+this.addForm.value.kvadrata+
			"&brojKreveta="+this.addForm.value.brojKreveta+
			"&pogledNa="+this.addForm.value.pogledNa;
			
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/Domaci/IT255-DZ12-Ivan-Markovic-2464/php/addroomservice.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data, err => alert(JSON.stringify(err)), () => {
		if(this.postResponse._body == "ok"){
		alert("Uspesno dodovanje sobe");
		this.router.parent.navigate(['./Sobe']);
	}else{
		alert("Neuspesno dodovanje sobe");
	}
   }
  );

  }

}