import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ProductoService } from '../service/producto.service';
import { VentaService } from '../service/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
clientes:[any];
productos:[any];


venta={
  cliente:"",
  categoria:"",
  producto:"",
  cantidad:0,   
  precio:0,
  productos_detalle:[],
  total:0
};

  constructor(private sc:ClienteService, 
    private sp: ProductoService,
    private sv:VentaService) { }

  ngOnInit(){
    this.sc.listar().subscribe(data=>{
      this.clientes= data;
      },err=>{ 
    });
  
      
  this.sp.listar().subscribe(data=>{
    this.productos= data;
    },err=>{ 
  });
  
}
poner_precio(){
  let data=this.venta.producto.split("-");
  this.venta.precio = Number(data[1]);
}
poner_categoria(){
  let data=this.venta.categoria.split("-");
  this.venta.categoria = String(data[2]);
}
agregar(){
  let data=this.venta.producto.split("-");

  let existe= this.venta.productos_detalle.findIndex(e => e.producto_id ==data[0]);

if(existe!= -1){
  this.venta.productos_detalle[existe]={
    producto_id: data[0],
    producto_nombre: data[2],
    cantidad:Number(this.venta.productos_detalle[existe].cantidad)+Number(this.venta.cantidad),
    precio:this.venta.precio,
    subtotal:(this.venta.productos_detalle[existe].cantidad*this.venta.cantidad)*this.venta.precio
  }
}else{
  this.venta.productos_detalle.push({
    producto_id: data[0],
    producto_nombre: data[2],
    cantidad:this.venta.cantidad,
    precio:this.venta.precio,
    subtotal:this.venta.cantidad * this.venta.precio
  });
}


  

  this.venta.total += Number(this.venta.cantidad) * Number(this.venta.precio);
}
guardar(){
  this.sv.guardar(this.venta).subscribe();
}
}