import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.scss']
})
export class HomePanelComponent implements OnInit {
  functions=[
    {avatar:'assets/png/home/clientes.png',name:'clientes', value:'pacientes'}
   ,{avatar:'assets/png/home/terapeuta.png',name:'colaboradores', value:'personal'}
   ,{avatar:'assets/png/home/reservaciones.png',name:'reservaciones', value:'consultas'}
   ,{avatar:'assets/png/home/productos.png',name:'producto', value:'farmacia'}
   ,{avatar:'assets/png/home/reportes.png',name:'reportes', value:'reportes'}
   ,{avatar:'assets/png/home/ajustes.png',name:'ajustes', value:'ajustes'}]
 constructor(private route: Router) { }

 ngOnInit(): void {
 }

 open(event: any){
   this.route.navigate([event]);
 }

}
