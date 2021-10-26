import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre  : string= 'aqua-uwu';
    edad    : number= 32;
    get nombrecapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtener3dad(){
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Darkness';
    }

    cambiaredad():void{
        this.edad=9673;
    }

}