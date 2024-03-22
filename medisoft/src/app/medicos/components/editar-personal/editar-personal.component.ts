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
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
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
  emailColor='#6C757D';
  emailValid=false;
  constructor(private personalService:PersonalService,    public dialogRef: MatDialogRef<EditarPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPersonalMedico, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTipoPersonal();
  }

  setTipo(){
    var e = document.getElementById("tipo") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.datosPersonal.idTipo=parseInt(value);
  }

  actualizarPersonal(){
    if(this.data.nombre!=''&&this.data.idTipo!=0&&this.data.area!=''&&this.data.email!=''&&this.emailValid===false){
      this.personalService.updatePersonal(this.datosPersonal).subscribe(res=>{
        this.operacionExitosa();
      })
    }else{
      this.operacionFallida()
    }
  }

  getTipoPersonal(){
    this.personalService.getTipoPersonal().subscribe(res=>{
      this.tipoPersonal=res;
    })
  }

  operacionExitosa(): void {
    let data={
      title:'Actualización Exitosa',
      messagge:'La información se ha actualizado exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
      /*
      this.datosPersonal={
        idPersonal:0,
        nombre:'',
        idTipo:0,
        email:'',
        idStatus:1
      }*/
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'La información no se actualzó correctamente. Por favor revise los datos.',
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
