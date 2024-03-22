import { Component, OnInit, Inject } from '@angular/core';
import { IConsulta } from 'src/app/shared/interfaces/i-consulta';
import { FormControl } from '@angular/forms';
import { ConsultaService } from 'src/app/shared/services/consulta.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
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
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class EditarConsultaComponent implements OnInit {
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
  constructor(private consultaService: ConsultaService,   public dialogRef: MatDialogRef<EditarConsultaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConsulta) { }

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

  addDaysToFinalDate(date: Date, days: any){
    var res = new Date(date);
    res.setDate(res.getDate()+days);
    return res;
  }

  dateValueChange(value:string){
    this.startDate = new Date(value);
    this.finalDate=this.addDaysToFinalDate(this.startDate, 1);
  }

}
