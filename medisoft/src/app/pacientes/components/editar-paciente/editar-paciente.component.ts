import { Component, OnInit, Inject } from '@angular/core';
import { IPaciente } from 'src/app/shared/interfaces/i-paciente';
import { NivelesService } from 'src/app/shared/services/niveles.service';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {
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
  resetNivel = new FormControl('');
  constructor(
    private nivelesService:NivelesService, 
    private pacienteService:PacientesService,
    public dialogRef: MatDialogRef<EditarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPaciente,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNiveles();
  }

  actualizarPaciente(){
    console.log(this.data);
    if(this.data.nombre!=''&&this.data.idNivel!=0 &&this.data.edad!=0 &&this.data.email!=''&&this.emailValid===false){
      this.pacienteService.updatePacientes(this.data).subscribe(res=>{
        this.operacionExitosa();
      });
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
    this.data.idNivel=parseInt(value);
  }

  operacionExitosa(): void {
    let data={
      title:'Actualización Completa',
      messagge:'información actualzida exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
      /*
      this.datosPaciente={
        idPaciente:0,
        nombre:'',
        idNivel:0,
        edad:0,
        email:'',
      }*/
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'La información no se actualizó exitosamente. Por favor revise  los datos modificados.',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }

  validarEmail(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.data.email)){
      this.emailValid=false
    }else{
      this.emailColor='#E63256'
      this.emailValid=true;
    }
  }
}
