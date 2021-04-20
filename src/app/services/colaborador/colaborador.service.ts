import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private API_SERVER = "https://backend-historias-app.herokuapp.com/colaborador/";

  constructor(private HttpClient: HttpClient) { }

  public getAllColaborador(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
  public saveColaborador (colaborador:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER,colaborador);
  }
  public deleteColaborador(id:any):Observable<any>{
    return this.HttpClient.delete(this.API_SERVER+"delete/"+id);
  }
}
