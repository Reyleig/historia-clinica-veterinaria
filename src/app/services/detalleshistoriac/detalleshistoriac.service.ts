import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleshistoriacService {
  private API_SERVER = "https://backend-historias-app.herokuapp.com/detalleshistoriaclinica/";

  constructor(private HttpClient: HttpClient) { }

  public getAllDetallesHistoriaC(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
  public saveDetallesHistoriaC (detallesHistoriaC:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER,detallesHistoriaC);
  }
  public deleteDetalleHistoriaC(id:any):Observable<any>{
    return this.HttpClient.delete(this.API_SERVER+"delete/"+id);
  }
}
