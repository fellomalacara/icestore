import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  public url = "http://localhost:3100/api"


  constructor(private _http : HttpClient) { }

  

  listar() : Observable<any> {
    return this._http.get(`${this.url}/cliente`);
  }
}