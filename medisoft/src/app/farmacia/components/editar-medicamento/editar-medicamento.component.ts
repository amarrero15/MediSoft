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
  constructor(private farmaciaService:FarmaciaService,   public dialogRef: MatDialogRef<EditarMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMedicamento) { }

  ngOnInit(): void {
  }

  updateMedicamento(){
    this.farmaciaService.agregarMedicamento(this.datosMedicamento).subscribe(res=>{
      console.log(res);
    })
  }
}
