import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class NivelesService {
  API_URI = environment.MSAPI;
  constructor(private hhtp:HttpClient) { }

  getNiveles(){
    return this.hhtp.get(`${this.API_URI}/niveles`)
  }


}
