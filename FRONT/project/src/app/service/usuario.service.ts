import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem("token")
    })
  };

  public url = "http://localhost:3100/api"

  constructor(private _http : HttpClient) { }

  guardar(usuario : Usuario) : Observable<any> {
    return this._http.post(`${this.url}/usuario`, usuario, this.httpOptions);
  }

  modificar(usuario : Usuario, id: any) {
    return this._http.put(`${this.url}/usuario/${id}`, usuario, this.httpOptions);
  }

  listar() : Observable<any> {
    return this._http.get(`${this.url}/usuario`, this.httpOptions);
  }

  ver(id: any) {
    return this._http.get(`${this.url}/usuario/${id}`, this.httpOptions);
  }

  eliminar(id: any, estado: any) {
    return this._http.delete(`${this.url}/usuario/${id}/${estado}`, this.httpOptions);
  }

  login(usuario) : Observable<any> {
    return this._http.post(`${this.url}/login`, usuario);
  }

}