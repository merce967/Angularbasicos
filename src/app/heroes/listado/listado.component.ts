import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  wafles: string [] =['Arthoriabb','Darkness', 'Milize','Aqua','Esdeth'];
  waflesborrados: string = '';
 
  
 borrar(){
  this.waflesborrados=  this.wafles.shift()||'';
 }



}
