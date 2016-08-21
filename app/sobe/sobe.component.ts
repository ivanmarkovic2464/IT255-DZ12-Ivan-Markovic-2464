import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS , Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import 'rxjs/Rx';
import {FORM_DIRECTIVES , FORM_BINDINGS} from 'angular2/common';
import {SearchPipe} from '../pipe/search';
import {SearchPipe2} from '../pipe/search2';

@Component({

 selector: 'Sobe',
 templateUrl: 'app/sobe/sobe.html',
 pipes: [SearchPipe, SearchPipe2]
})


export class Sobe {

  http: Http;
  router: Router;
  brojKreveta: String = "";
  kvadrata: String="";

  rooms: Object[];
   constructor( http: Http, router: Router) {
  this.http = http;
  this.router = router;
  var headers = new Headers();

  http.get('http://localhost/Domaci/IT255-DZ12-Ivan-Markovic-2464/php/get.php',{headers:headers})
  .map(res => res.json())
  .subscribe(rooms => {this.rooms = rooms.rooms;
  });

}
}