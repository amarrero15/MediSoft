import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-comprobante-consulta',
  templateUrl: './comprobante-consulta.component.html',
  styleUrls: ['./comprobante-consulta.component.scss']
})
export class ComprobanteConsultaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ComprobanteConsultaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
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

}
