import { Component, OnInit } from '@angular/core';
import { IConsulta } from 'src/app/shared/interfaces/i-consulta';
import { ConsultaService } from 'src/app/shared/services/consulta.service';
@Component({
  selector: 'app-nueva-consulta',
  templateUrl: './nueva-consulta.component.html',
  styleUrls: ['./nueva-consulta.component.scss']
})
export class NuevaConsultaComponent implements OnInit {
  medicos:any;
  pacientes:any;
  datosConsulta:IConsulta={
    idConsulta:0,
    idPaciente:0,
    idMedico:0,
    email:''
  }
  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.getMedicos();
    this.getPacientes();
  }

  getMedicos(){
    this.consultaService.getMedicos().subscribe(res=>{
      this.medicos=res;
    })
  }
  getPacientes(){
    this.consultaService.getPacientes().subscribe(res=>{
      this.pacientes=res;
    })
  }

  setMedico(){
    var e = document.getElementById("medicos") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.datosConsulta.idMedico=parseInt(value);
  }
  setPaciente(){
    var e = document.getElementById("pacientes") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.datosConsulta.idPaciente=parseInt(value);
    //this.datosConsulta.email=this.pacientes[index].email;
  }

  agendarConsulta(){
    this.consultaService.agendarConsulta(this.datosConsulta).subscribe(res=>{
      console.log(res);
    })
  }

}
