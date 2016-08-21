import {Pipe} from 'angular2/core';
@Pipe({
 name: 'SearchPipe2'
})
export class SearchPipe2 {

transform (value, [queryString]) {
 if (value==null) {
 return null;
 }
 console.log('transform');
 return value.filter(item=>item.kvadrata.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);

 }


}