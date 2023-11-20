import { Component, OnInit } from '@angular/core';
import { IPaciente } from 'src/app/shared/interfaces/i-paciente';
import { NivelesService } from 'src/app/shared/services/niveles.service';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss']
})
export class NuevoPacienteComponent implements OnInit {
  avatarType='pacientes';
  niveles:any
  datosPaciente:IPaciente={
    idPaciente:0,
    nombre:'',
    idNivel:0,
    edad:0,
    email:'',
  }
  constructor(private nivelesService:NivelesService, private pacienteService:PacientesService) { }

  ngOnInit(): void {
    this.getNiveles();
  }

  agregarPaciente(){
    this.pacienteService.agregarPaciente(this.datosPaciente).subscribe(res=>{
      console.log(res);
    })
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
