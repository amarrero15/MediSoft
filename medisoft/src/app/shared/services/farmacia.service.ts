import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  API_URI = environment.MSAPI;
  constructor(private hhtp:HttpClient) { }

  agregarMedicamento(datosMedicamento:any){
    return this.hhtp.post(`${this.API_URI}/medicamentos`, datosMedicamento)
  }

  getMedicamentos(){
    return this.hhtp.get(`${this.API_URI}/medicamentos`)
  }

  updateMedicamento(datosMedicamento: any){
    return this.hhtp.put(`${this.API_URI}/medicamentos`, datosMedicamento);
  }
  deleteMedicamento(idMedicamento:any){
    return this.hhtp.delete(`${this.API_URI}/medicamentos/${idMedicamento}`);
  }
}
