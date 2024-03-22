import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AjustesService {
  API_URI = environment.MSAPI;
  constructor(private http:HttpClient) { }

  agregarUsuario(datosUsuario:any){
    return this.http.post(`${this.API_URI}/usuarios`, datosUsuario);
  }

  deleteUsuario(idUsuario:any){
    return this.http.delete(`${this.API_URI}/usuarios/${idUsuario}`);
  }

  getTipoUsuario(){
    return this.http.get(`${this.API_URI}/usuarios/tipos`);
  }

  getUsuarios(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  updateUsuario(datosUsuario: any){
    return this.http.put(`${this.API_URI}/usuarios`, datosUsuario);
  }
}
