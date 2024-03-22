import { Component, OnInit } from '@angular/core';
import { IConsulta } from 'src/app/shared/interfaces/i-consulta';
import { ConsultaService } from 'src/app/shared/services/consulta.service';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-nueva-consulta',
  templateUrl: './nueva-consulta.component.html',
  styleUrls: ['./nueva-consulta.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class NuevaConsultaComponent implements OnInit {
  days=[
    {dayId:1, name:'Lunes'}
    ,{dayId:2, name:'Martes'}
    ,{dayId:2, name:'Miércoles'}
    ,{dayId:3, name:'Jueves'}
    ,{dayId:4, name:'Jueves'}
    ,{dayId:5, name:'Viernes'}
    ,{dayId:6, name:'Sábado'}
    ,{dayId:1, name:'Domingo'}]
  medicos:any;
  pacientes:any;
  datosConsulta:IConsulta={
    idConsulta:0,
    idPaciente:0,
    idMedico:0,
    fechaConsulta:new Date(),
    email:'',
    idStatus:1,
    costo:0
  }

  startDate=new Date();
  finalDate=this.addDaysToFinalDate(this.startDate, 1);
  todayDate=new Date();
  privacyLevel=0;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  emailColor='#6C757D';
  emailValid=false;
  constructor(private consultaService: ConsultaService, public dialog: MatDialog) { }

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
    var index=this.pacientes.indexOf(parseInt(value))
    console.log(parseInt(value));
    //this.datosConsulta.email=this.pacientes[index].nombre;
  }
  setEmail(index:any){
    console.log(this.pacientes[index].email);
  }
  agendarConsulta(){
    if(this.datosConsulta.idPaciente!=0&&this.datosConsulta.idMedico!=0&&this.datosConsulta.email!=''&&this.emailValid===false){
      this.consultaService.agendarConsulta(this.datosConsulta).subscribe(res=>{
        this.operacionExitosa();
      })
    }else{
      this.operacionFallida()
    }

  }

  addDaysToFinalDate(date: Date, days: any){
    var res = new Date(date);
    res.setDate(res.getDate()+days);
    return res;
  }

  dateValueChange(value:string){
    this.startDate = new Date(value);
    this.finalDate=this.addDaysToFinalDate(this.startDate, 1);
  }

  operacionExitosa(): void {
    let data={
      title:'Consulta Registrada',
      messagge:'La consulta se ha registrado exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {

      this.datosConsulta={
        idConsulta:0,
        idPaciente:0,
        idMedico:0,
        fechaConsulta:new Date(),
        email:'',
        idStatus:1,
        costo:0
      }
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'La consulta no se ha procesado. POr favor revise la información',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }

  validarEmail(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.datosConsulta.email)){
      this.emailValid=false
    }else{
      this.emailColor='#E63256'
      this.emailValid=true;
    }
  }

}
