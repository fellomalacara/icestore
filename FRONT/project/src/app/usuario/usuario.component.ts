import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario = {
    nombre : "",
    apellido : "",
    telefono : "",
    correo : "",
    usuario : "",
    clave : "",
    estado : true
  }

  usuarios: Array<Usuario> = [];

  constructor(private _us : UsuarioService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this._us.listar().subscribe((data)=>{
      this.usuarios = data.datos;
    }, err =>{

    });
  }

  guardar(){
    this._us.guardar(this.usuario).subscribe((data)=>{
      if(!data.ok){
        alert("error");
      }else{
        alert("se guardo");
        this.listar();

        this.usuario = {
          nombre : "",
          apellido : "",
          telefono : "",
          correo : "",
          usuario : "",
          clave : "",
          estado : true
        }
      }
    }, err => {
      alert(err);
    })
  }}