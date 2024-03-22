import { Component, OnInit, Input } from '@angular/core';
import { IMedicamento } from '../../../shared/interfaces/i-medicamento';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
@Component({
  selector: 'app-nuevo-medicamento',
  templateUrl: './nuevo-medicamento.component.html',
  styleUrls: ['./nuevo-medicamento.component.scss']
})
export class NuevoMedicamentoComponent implements OnInit {
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
  constructor(private farmaciaService:FarmaciaService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  agregarMedicamento(){
    if(this.datosMedicamento.nombre!=''&&this.datosMedicamento.cantidad!=0&&this.datosMedicamento.precio!=0){
      this.farmaciaService.agregarMedicamento(this.datosMedicamento).subscribe(res=>{
        console.log(res);
      })
    }else{
      this.operacionFallida();
    }
  }

  operacionExitosa(): void {
    let data={
      title:'Medicamento Registrado',
      messagge:'El medicamento se ha registrado exitosamente',
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
      messagge:'El medicamento no se ha registrado. Por favor revise los datos.',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }

  setCantidad(){
    if(this.datosMedicamento.cantidad<=0){
      this.medicamentoValid=true
      //this.datosMedicamento.cantidad=0;
    }else{
      this.medicamentoValid=false
    }
  }

  setPrecio(){
    if(this.datosMedicamento.precio<=0){
      this.montoMedicamentoValid=true
      //this.datosMedicamento.cantidad=0;
    }else{
      this.montoMedicamentoValid=false
    }
  }
}
