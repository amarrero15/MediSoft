import { Component, OnInit, Input } from '@angular/core';
import { IMedicamento } from '../../../shared/interfaces/i-medicamento';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
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
  constructor(private farmaciaService:FarmaciaService) { }

  ngOnInit(): void {
  }

  agregarMedicamento(){
    this.farmaciaService.agregarMedicamento(this.datosMedicamento).subscribe(res=>{
      console.log(res);
    })
  }

}
