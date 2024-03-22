import { Component, OnInit, Input, Inject } from '@angular/core';
import { IMedicamento } from '../../../shared/interfaces/i-medicamento';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
@Component({
  selector: 'app-editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styleUrls: ['./editar-medicamento.component.scss']
})
export class EditarMedicamentoComponent implements OnInit {
  @Input() avatarType='farmacia'
  datosMedicamento:IMedicamento={
    idMedicamento:0,
    nombre:'',
    cantidad:0,
    precio:0
  }
  medicamentoColor='#6C757D';
  medicamentoValid=false;
  montoMedicamentoColor='#6C757D';
  montoMedicamentoValid=false;
  constructor(private farmaciaService:FarmaciaService,   public dialogRef: MatDialogRef<EditarMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMedicamento, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateMedicamento(){
    if(this.data.nombre!=''&&this.data.cantidad!=0&&this.data.precio!=0){
      this.farmaciaService.updateMedicamento(this.data).subscribe(res=>{
        this.operacionExitosa();
      })
    }else{
      this.operacionFallida();
    }
  }

  operacionExitosa(): void {
    let data={
      title:'Actualización Exitosa',
      messagge:'La información se actualizó exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {

      this.datosMedicamento={
        idMedicamento:0,
        nombre:'',
        cantidad:0,
        precio:0
      }
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'El medicamento no se actualizó adecuadamente. Por favor revise los datos.',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }

  setCantidad(){
    if(this.data.cantidad<=0){
      this.medicamentoValid=true
      //this.datosMedicamento.cantidad=0;
    }else{
      this.medicamentoValid=false
    }
  }

  setPrecio(){
    if(this.data.precio<=0){
      this.montoMedicamentoValid=true
      //this.datosMedicamento.cantidad=0;
    }else{
      this.montoMedicamentoValid=false
    }
  }
}
