//el modulo de contador va dentro de la carpeta contador, pero por fuera de la otra carpeta contador que contiene el componente en si.

import {NgModule  } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[ //aca van los componentes que manejare con este modulo
        ContadorComponent
    ],
    exports:[ //aca van los elementos que seran publicos desde este modulo.
        ContadorComponent
    ]
})

export class ContadorModule{

}