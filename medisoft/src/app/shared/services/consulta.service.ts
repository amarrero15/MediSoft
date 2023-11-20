import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  API_URI = environment.MSAPI;
  constructor(private http:HttpClient) { }

  agendarConsulta(datosConsulta:any){
    return this.http.post(`${this.API_URI}/consultas`, datosConsulta)
  }

  getConsultas(){
    return this.http.get(`${this.API_URI}/consultas`)
  }

  getMedicos(){
    return this.http.get(`${this.API_URI}/personal/medicos`)
  }

  getPacientes(){
    return this.http.get(`${this.API_URI}/pacientes`)
  }
  getPaciente(idPaciente:any){
    return this.http.get(`${this.API_URI}/pacientes/${idPaciente}`)
  }
}
