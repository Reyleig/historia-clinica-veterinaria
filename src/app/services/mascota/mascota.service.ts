import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private API_SERVER = "https://backend-historias-app.herokuapp.com/mascota/";

  constructor(private HttpClient: HttpClient) { }

  public getAllMascota(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
  public saveMascota (mascota:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER,mascota);
  }
  public deleteMascota(id:any):Observable<any>{
    return this.HttpClient.delete(this.API_SERVER+"delete/"+id);
  }

}
