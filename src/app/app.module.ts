import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module'; //aca estoy importando el modulo de heroes
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [//aca se colocan componentes
    AppComponent,
    //ContadorComponent, //en las declaraciones debo agregar el ContadorComponent porque sino me va a saltar un error.
  ],
  imports: [ //aca se colocan modulos
    BrowserModule,
    HeroesModule, //en el app.module tengo que importar los modulos que necesito sean visibles por mi aplicacion.
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
