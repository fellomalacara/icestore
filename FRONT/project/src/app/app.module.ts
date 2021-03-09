
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { appRoutes } from './app.routing';

import { UsuarioComponent } from './usuario/usuario.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    ProductoComponent,
    VentaComponent,
    VentaComponent
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  RouterModule.forRoot(appRoutes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
