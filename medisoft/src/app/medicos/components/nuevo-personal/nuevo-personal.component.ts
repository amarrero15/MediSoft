import { Component, OnInit } from '@angular/core';
import { IPersonal } from 'src/app/shared/interfaces/i-personal';
import { PersonalService } from 'src/app/shared/services/personal.service';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
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
  emailColor='#6C757D';
  emailValid=false;
  constructor(private personalService:PersonalService, public dialog: MatDialog) { }

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
    if(this.datosPersonal.nombre!=''&&this.datosPersonal.idTipo!=0&&this.datosPersonal.email!=''&&this.emailValid===false){
      this.personalService.agregarPersonal(this.datosPersonal).subscribe(res=>{
       this.operacionExitosa();
      })
    }else{
      this.operacionFallida();
    }
  }

  getTipoPersonal(){
    this.personalService.getTipoPersonal().subscribe(res=>{
      this.tipoPersonal=res;
    })
  }

  operacionExitosa(): void {
    let data={
      title:'Funcionario Registrado',
      messagge:'El funcionario se ha registrado exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {

      this.datosPersonal={
        idPersonal:0,
        nombre:'',
        idTipo:0,
        email:'',
        idStatus:1
      }
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'El funcionario no se ha registrado. Por favor los datos.',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }



  validarEmail(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.datosPersonal.email)){
      this.emailValid=false
    }else{
      this.emailColor='#E63256'
      this.emailValid=true;
    }
  }

}
