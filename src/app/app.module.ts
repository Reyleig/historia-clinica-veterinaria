import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { HistoriaclinicaComponent } from './historiaclinica/historiaclinica.component';
import { MascotaComponent } from './mascota/mascota.component';
import { DetalleshistoriacComponent } from './detalleshistoriac/detalleshistoriac.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ColaboradorComponent,
    HistoriaclinicaComponent,
    MascotaComponent,
    DetalleshistoriacComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
