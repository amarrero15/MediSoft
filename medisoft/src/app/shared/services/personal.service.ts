import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  API_URI = environment.MSAPI;
  constructor(private hhtp:HttpClient) { }

  agregarPersonal(datosPersonal:any){
    return this.hhtp.post(`${this.API_URI}/personal`, datosPersonal)
  }

  getPersonal(){
    return this.hhtp.get(`${this.API_URI}/personal`)
  }
  getTipoPersonal(){
    return this.hhtp.get(`${this.API_URI}/personal/tipo`)
  }
}
