import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  API_URI = environment.MSAPI;
  constructor(private http:HttpClient) { }

  getIndicadoresConsultas(){
    return this.http.get(`${this.API_URI}/reportes/consultas`);
  }
  getIndicadoresFarmacia(){
    return this.http.get(`${this.API_URI}/reportes/medicamentos`);
  }
}
