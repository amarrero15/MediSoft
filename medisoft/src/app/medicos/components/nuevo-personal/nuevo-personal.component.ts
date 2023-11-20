import { Component, OnInit } from '@angular/core';
import { IPersonal } from 'src/app/shared/interfaces/i-personal';
import { PersonalService } from 'src/app/shared/services/personal.service';
@Component({
  selector: 'app-nuevo-personal',
  templateUrl: './nuevo-personal.component.html',
  styleUrls: ['./nuevo-personal.component.scss']
})
export class NuevoPersonalComponent implements OnInit {
  avatarType='medicos';
  tipoPersonal:any;
  datosPersonal:IPersonal={
    idPersonal:0,
    nombre:'',
    idTipo:0,
    email:'',
    idStatus:1
  }
  constructor(private personalService:PersonalService) { }

  ngOnInit(): void {
    this.getTipoPersonal();
  }

  setTipo(){
    var e = document.getElementById("tipo") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.datosPersonal.idTipo=parseInt(value);
  }

  agregarPersonal(){
    this.personalService.agregarPersonal(this.datosPersonal).subscribe(res=>{
      console.log(res);
    })
  }

  getTipoPersonal(){
    this.personalService.getTipoPersonal().subscribe(res=>{
      this.tipoPersonal=res;
    })
  }

}
