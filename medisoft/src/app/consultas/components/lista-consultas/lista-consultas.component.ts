
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IConsulta } from 'src/app/shared/interfaces/i-consulta';
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
import { EditarConsultaComponent } from '../editar-consulta/editar-consulta.component';
@Component({
  selector: 'app-lista-consultas',
  templateUrl: './lista-consultas.component.html',
  styleUrls: ['./lista-consultas.component.scss']
})
export class ListaConsultasComponent implements AfterViewInit {
  displayedColumns: string[] = ['idConsulta', 'paciente', 'medico', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<IConsulta>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private consultaService: ConsultaService, public dialog: MatDialog) {
    this.consultaService.getConsultas().subscribe(res=>{
      this.dataSource =new MatTableDataSource(res as IConsulta[]);
    })
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    /*
    this.farmaciaService.getMedicamentos().subscribe(res=>{
      this.pacientes=res;
      console.log(this.pacientes);
    })*/
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarConsulta(element: any): void {
    console.log(element);
    
    const dialogRef = this.dialog.open(EditarConsultaComponent, { panelClass:'nuevo-paciente-container',
      data: element,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    
  }
  
  deletePaciente(paciente: any){}

}
