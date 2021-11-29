import { CommonModule } from "@angular/common";
import { NgModule  } from "@angular/core"; //esto se llama en todos los modules
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ //las declaraciones dicen que cosas tiene este modulo, que componentes, que pipes. etc.
        HeroeComponent, //aca le indico que cosas tendra ese modulo. todo lo referido a los heroes. todo esto esta invisible para la aplicacion, por eso a continuacion defino las exportaciones que lo que hace es definir que es lo que estara visible para la aplucacion, exceptuando los modulos que 
        ListadoComponent,
    ],
    exports:[ //esta son las cosas visibles
        ListadoComponent
    ],
    imports:[ //aca van los modulos 
        CommonModule //aca se indica este modulo que basicamente sirve para poder usar en este modulo el ngIf y el NgFor. Si fuese un modulo muy sencillo no seria necesario, pero cuando es mas complejo este CommonModule habilitae esos comandos.
    ]


})
export class HeroesModule{ //todo en angular es una clase. aca se usa el docorador para convertir la clase en un Modulo

}