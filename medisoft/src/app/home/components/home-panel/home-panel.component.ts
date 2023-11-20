import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.scss']
})
export class HomePanelComponent implements OnInit {
  functions=[
    {avatar:'assets/png/home/pacientes.png',name:'pacientes', value:'pacientes'}
   ,{avatar:'assets/png/home/medicos.png',name:'personal médico', value:'personal'}
   ,{avatar:'assets/png/home/consultas.png',name:'consultas', value:'consultas'}
   ,{avatar:'assets/png/home/farmacia.png',name:'farmacia', value:'farmacia'}]
 constructor(private route: Router) { }

 ngOnInit(): void {
 }

 open(event: any){
   this.route.navigate([event]);
 }

}
