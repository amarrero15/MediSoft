import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/shared/services/consulta.service';
import { IPaciente } from '../../../shared/interfaces/i-paciente';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
import { IReceta } from 'src/app/shared/interfaces/i-receta';
import {MatDialog} from '@angular/material/dialog';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ComprobanteConsultaComponent } from '../comprobante-consulta/comprobante-consulta.component';
@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent implements OnInit {
  diagnostico={
    idPaciente:0,
    nombre:'',
    edad:0,
    email:'',
    nivel:'',
    valoracion:'',
    diagnosticoMedico:'',
    observaciones:'',
    receta:[]
  }
  consultas:any;
  medicamentos:any;
  datosPaciente:any;
  visibleData=false;
  visibleReceta=false;
  receta: IReceta[]=[];
  medicamento:IReceta={
    idMedicamento:0,
    medicamento:'',
    cantidad:0,
    dosis:'',
  }
  constructor(private consultaService: ConsultaService, private farmaciaService:FarmaciaService, public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.getConsultas();
    this.getMedicamentos();
  }

  getConsultas(){
    this.consultaService.getConsultas().subscribe(res=>{
      this.consultas=res as any;
    })
  }
  getMedicamentos(){
    this.farmaciaService.getMedicamentos().subscribe(res=>{
      this.medicamentos=res;
    })
  }
  getPaciente(idPaciente:any){
    this.consultaService.getPaciente(idPaciente).subscribe(res=>{
      this.datosPaciente=res;
      console.log(this.datosPaciente);
      this.visibleData=true
    })
  }

  setDatosConsulta(){
    var e = document.getElementById("paciente") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.getPaciente(parseInt(value));
    //this.datosPaciente.idNivel=parseInt(value);
  }

  setMedicamento(){
    var e = document.getElementById("medicamentos") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.medicamento.idMedicamento=parseInt(value);
    this.medicamento.medicamento=text;
    //this.datosPaciente.idNivel=parseInt(value);
  }
  recetarMedicamento(){
    this.receta.push(this.medicamento);
    this.medicamento={
      idMedicamento:0,
      medicamento:'',
      cantidad:0,
      dosis:'',
    }
    this.visibleReceta=true;
    console.log(this.receta);
  }

  public downloadPDF(): void {
    var DATA = document.getElementById('htmlData') as HTMLElement;
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
    //const doc = new jsPDF();

    //doc.text('Hello world!', 10, 10);
    //doc.save('hello-world.pdf');
  }

  generarComprobante(): void {
    this.diagnostico.idPaciente=this.datosPaciente.nombre;
    this.diagnostico.nombre=this.datosPaciente.nombre;
    this.diagnostico.edad=this.datosPaciente.edad;
    this.diagnostico.nivel=this.datosPaciente.nivel;
    this.diagnostico.email=this.datosPaciente.email;
    this.diagnostico.receta=this.receta as any

    const dialogRef = this.dialog.open(ComprobanteConsultaComponent, {
      data: this.diagnostico, height:'100%',width:'100%'

    });

    dialogRef.afterClosed().subscribe(result => {

    });
    
  }

}
