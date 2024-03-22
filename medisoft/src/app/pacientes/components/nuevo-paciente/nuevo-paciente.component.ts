import { Component, OnInit } from '@angular/core';
import { IPaciente } from 'src/app/shared/interfaces/i-paciente';
import { NivelesService } from 'src/app/shared/services/niveles.service';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss']
})
export class NuevoPacienteComponent implements OnInit {
  avatarType='pacientes';
  niveles:any
  datosPaciente:IPaciente={
    idPaciente:0,
    nombre:'',
    idNivel:0,
    edad:0,
    email:'',
  }


  emailColor='#6C757D';
  emailValid=false;
  constructor(private nivelesService:NivelesService, private pacienteService:PacientesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNiveles();
  }

  agregarPaciente(){
    if(this.datosPaciente.nombre!=''&&this.datosPaciente.idNivel!=0 &&this.datosPaciente.edad!=0 &&this.datosPaciente.email!=''&&this.emailValid===false){
      this.pacienteService.agregarPaciente(this.datosPaciente).subscribe(res=>{
        this.operacionExitosa();
      })
    }else{
      this.operacionFallida();
    }
  }

  getNiveles(){
    this.nivelesService.getNiveles().subscribe(res=>{
      this.niveles=res;
    })
  }

  setNivel(){
    var e = document.getElementById("nivel") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.datosPaciente.idNivel=parseInt(value);
  }

  operacionExitosa(): void {
    let data={
      title:'Paciente Registrado',
      messagge:'El paciente se ha registrado exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {

      this.datosPaciente={
        idPaciente:0,
        nombre:'',
        idNivel:0,
        edad:0,
        email:'',
      }
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'El paciente no se ha registrado. Por favor los datos.',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }

  validarEmail(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.datosPaciente.email)){
      this.emailValid=false
    }else{
      this.emailColor='#E63256'
      this.emailValid=true;
    }
  }

}
