import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/shared/services/consulta.service';
import { IPaciente } from '../../../shared/interfaces/i-paciente';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
import { IReceta } from 'src/app/shared/interfaces/i-receta';
@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent implements OnInit {
  consultas:any;
  medicamentos:any;
  datosPaciente:any;
  visibleData=false;
  visibleReceta=false;
  receta: IReceta[]=[];
  medicamento:IReceta={
    idMedicamento:0,
    medicamento:'',
    cantidad:0,
    dosis:'',
  }
  constructor(private consultaService: ConsultaService, private farmaciaService:FarmaciaService) { }

  ngOnInit(): void {
    this.getConsultas();
    this.getMedicamentos();
  }

  getConsultas(){
    this.consultaService.getConsultas().subscribe(res=>{
      this.consultas=res as any;
    })
  }
  getMedicamentos(){
    this.farmaciaService.getMedicamentos().subscribe(res=>{
      this.medicamentos=res;
    })
  }
  getPaciente(idPaciente:any){
    this.consultaService.getPaciente(idPaciente).subscribe(res=>{
      this.datosPaciente=res;
      console.log(this.datosPaciente);
      this.visibleData=true
    })
  }

  setDatosConsulta(){
    var e = document.getElementById("paciente") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.getPaciente(parseInt(value));
    //this.datosPaciente.idNivel=parseInt(value);
  }

  setMedicamento(){
    var e = document.getElementById("medicamentos") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.medicamento.idMedicamento=parseInt(value);
    this.medicamento.medicamento=text;
    //this.datosPaciente.idNivel=parseInt(value);
  }
  recetarMedicamento(){

    this.receta.push(this.medicamento);
    this.visibleReceta=true;
    console.log(this.receta);
  }

}
