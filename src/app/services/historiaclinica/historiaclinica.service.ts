import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaclinicaService {
  private API_SERVER = "https://backend-historias-app.herokuapp.com/historia_clinica/";

  constructor(private HttpClient: HttpClient) { }

  public getAllHistoriaClinica(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
  public saveHistoriaclinica (historiaclinica:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER,historiaclinica);
  }
  public deleteHistoriaClinica(id:any):Observable<any>{
    return this.HttpClient.delete(this.API_SERVER+"delete/"+id);
  }

}
