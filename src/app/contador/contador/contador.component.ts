import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }} </h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <!-- Esto que estoy viendo seria basicamente una instancia de la clase AppComponent del archivo app.component.ts que esta vinculado a este html-->

        <button (click)=" acumular( +base ); "> +{{base}} </button>  <!-- en angular para u boton con los () indico que son eventos, entonces dentro de dichos parentesis indico que es lo que dispara el evento. Y luego del = se puede escribir una expresion de JS donde indique que hace ese click -->
        <span>{{numero}}</span>
        <button (click)=" acumular(-base) ; "> -{{base}} </button>
        `
})

export class ContadorComponent {
    titulo: string = 'Contador app'; //en esta propiedad de la clase, llamada titulo como valor aparace el nombre con el que cree el proyecto al hacer ng new XXXXX. Esto se puede cambiar. aca lo cambio de 'bases' a 'Contador app'. Para que ese titulo se muestre en el html que defini en templateUrl lo que debo hacer es definir en el lugar donde queremos mostrar ese valor de la propiedad {{titulo}}. es decir estoy llamando desde el html mediante el nombre de la propiedad para que su contenido se muestre en donde lo llamo. En este caso se pone en el h1 del html ese {{ titulo }}. Tambien es bueno agregarle el tipado a la propiedad (titulo) mas alla que TSC lo detecto correctamente sin definirlo. Es buena practica.
    //se definira otra propiedad que se llamara desde el html tambien
    numero: number = 10
  
    base:number = 5;
  
    //dentro de la clase puedo crear metodos
    /* sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    } */
    acumular(valor:number){
      this.numero += valor;

    }
}
