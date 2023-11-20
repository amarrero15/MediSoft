import { Component, OnInit, Inject } from '@angular/core';
import { IPersonal } from 'src/app/shared/interfaces/i-personal';
import { PersonalService } from 'src/app/shared/services/personal.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog';
import { IPersonalMedico } from 'src/app/shared/interfaces/i-personal-medico';
@Component({
  selector: 'app-editar-personal',
  templateUrl: './editar-personal.component.html',
  styleUrls: ['./editar-personal.component.scss']
})
export class EditarPersonalComponent implements OnInit {
  avatarType='medicos';
  tipoPersonal:any;
  datosPersonal:IPersonal={
    idPersonal:0,
    nombre:'',
    idTipo:0,
    email:'',
    idStatus:1
  }
  constructor(private personalService:PersonalService,    public dialogRef: MatDialogRef<EditarPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPersonalMedico,) { }

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
