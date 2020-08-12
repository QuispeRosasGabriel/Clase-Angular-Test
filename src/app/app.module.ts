import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { IncrementadorComponent } from './avanzado/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterMedicoComponent,
    NavbarComponent,
    IncrementadorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
