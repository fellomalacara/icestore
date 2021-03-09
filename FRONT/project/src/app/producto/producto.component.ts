import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  formProductos = {
    nombre: "",
    categoria : "",
    precio : 0,
    preciounitario:0,
    cantidad : 0,
    imagen : ""
  }

  token = localStorage.getItem("token");

  imagen : File;

  productos : Array<any>;

  constructor(private sp : ProductoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.sp.listar().subscribe(data => {
      this.productos = data;
    }, err => {

    });
  }

  cargarImagen(img : any){
    this.imagen = img.target.files[0];
  }

  guardar(){
    this.sp.guardar(this.formProductos, this.imagen)
    .subscribe(data => {
      this.listar();
    }, err => {

    })
  }

}