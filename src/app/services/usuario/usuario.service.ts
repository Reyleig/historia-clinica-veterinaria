import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private API_SERVER = "http://localhost:8080/usuario/";

  constructor(private HttpClient: HttpClient) { }

  public getAllusuario(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
  public saveUsuario (usuario:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER,usuario);
  }
}