import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //en el "decorador" COmponent debo especificar al menos 2 argumentos. Primero el selector que voy a dar el de la aplicacion principal "app-root" que es lo que veo en el archivo index.html
  templateUrl: 'app.component.html'  //el segundo parametro sera para indenficar si el selector tiene una contraparte de html. aparecen 2...templateUrl al cual deberia especificarle el path en el cual se encuentra el archivo de html que sera utilizado para este componente para mostrar la informacion del html. POr eso le indico el archivo app.component.html que esta en esta misma carpeta. En cambio si elegimos la opcion "template" podemos definir un template literal o un string con lo que queramos mostrar. En el ejemplo comentado mas abajo se pone un span y eso es lo que mostrara el archivo html mas alla que ese archivo tenga contenido. Es como que ignora el archivo separado y muestra lo que definamos en este template.
  //template: //'<span>Guillermo</span>'
})

export class AppComponent {

}
