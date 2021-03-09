import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';

export const appRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent  },
    { path: 'producto', component: ProductoComponent  },
    { path: 'venta', component: VentaComponent  },
    { path: '',      component: LoginComponent },
    { path: '**', component: LoginComponent }
  ];