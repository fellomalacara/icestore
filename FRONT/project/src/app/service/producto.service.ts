import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  public url = "http://localhost:3100/api"

  constructor(private _http : HttpClient) { }

  guardar(infoProducto, imgProducto : File) : Observable<any> {

    let datos = new FormData();
    datos.append("nombre", infoProducto.nombre);
    datos.append("precio", infoProducto.precio);
    datos.append("categoria", infoProducto.categoria);
    datos.append("cantidad", infoProducto.cantidad);
    datos.append("imagen", imgProducto,  imgProducto.name);

    return this._http.post(`${this.url}/producto`, datos);
  }

  listar() : Observable<any> {
    return this._http.get(`${this.url}/producto`);
  }
}