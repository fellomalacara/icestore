import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    usuario : "",
    clave :  ""
  }

  constructor(private _su : UsuarioService, private r : Router) { }

  ngOnInit() {
  }

  ingresar(){
    this._su.login(this.usuario).subscribe((data)=>{

      if(data.ok){
        localStorage.setItem("token",data.token);
        this.r.navigate(["usuario"]);
      }else{
        alert(data.men);
      }

    }, err =>{
      alert(err.error.men);
      // console.log(err);
    })
  }

}