import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  {path: '', component: UsuarioComponent, pathMatch: 'full'},
    {path: '**', redirectTo: '/',pathMatch: 'full'},
];

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
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
