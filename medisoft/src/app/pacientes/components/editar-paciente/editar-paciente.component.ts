import { Component, OnInit, Inject } from '@angular/core';
import { IPaciente } from 'src/app/shared/interfaces/i-paciente';
import { NivelesService } from 'src/app/shared/services/niveles.service';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog';
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
  constructor(
    private nivelesService:NivelesService, 
    private pacienteService:PacientesService,
    public dialogRef: MatDialogRef<EditarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPaciente,) { }

  ngOnInit(): void {
    this.getNiveles();
  }

  agregarPaciente(){
    this.pacienteService.updatePacientes(this.data).subscribe(res=>{
      console.log(res);
    });
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
}
