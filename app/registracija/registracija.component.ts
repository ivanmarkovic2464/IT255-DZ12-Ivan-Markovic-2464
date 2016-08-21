import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
  selector: 'RegistracijaComponent',
  templateUrl: 'app/registracija/registracija.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class RegistracijaComponent{

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     k_ime: ["", Validators.none],
     lozinka: ["", Validators.none],
     ime: ["", Validators.none],
     prezime: ["", Validators.none],
	 email: ["", Validators.none]
   });
   
	if(localStorage.getItem('token') != null){
		this.router.parent.navigate(['MainPage']);
	}
  }
	
 
  onRegister(): void {
	var data = "k_ime="+this.registerForm.value.k_ime+
			   "&lozinka="+this.registerForm.value.lozinka+
			   "&ime="+this.registerForm.value.ime+
			   "&prezime="+this.registerForm.value.prezime+
			   "&email="+this.registerForm.value.email;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/Domaci/IT255-DZ12-Ivan-Markovic-2464/php/register.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => alert(JSON.stringify(err)), 
	() => {
		if(this.postResponse._body.indexOf("error") === -1){
			var obj = JSON.parse(this.postResponse._body);
			localStorage.setItem('token', obj.token);
			this.router.parent.navigate(['./MainPage']);
		}else{
			var obj = JSON.parse(this.postResponse._body);
			document.getElementsByClassName("alert")[0].display = "block";
			document.getElementsByClassName("alert")[0].innerHTML =
			obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
		}
	}
	);

  }
}