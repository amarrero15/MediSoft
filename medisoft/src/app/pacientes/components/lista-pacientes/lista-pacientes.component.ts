import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IPaciente } from '../../../shared/interfaces/i-paciente';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { EditarPacienteComponent } from '../editar-paciente/editar-paciente.component';
@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements AfterViewInit {
  displayedColumns: string[] = ['idPaciente', 'nombre', 'nivel', 'edad', 'email', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<IPaciente>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pacientes:any=[];
  constructor(private pacienteService:PacientesService, public dialog: MatDialog) {
    // Assign the data to the data source for the table to render
    this.pacienteService.getpacientes().subscribe(res=>{
      this.dataSource =new MatTableDataSource(res as IPaciente[]);
    })
    //this.dataSource = new MatTableDataSource(this.pacientes);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.pacienteService.getpacientes().subscribe(res=>{
      this.pacientes=res;
      console.log(this.pacientes);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarPaciente(element: any): void {
    console.log(element);
    
    const dialogRef = this.dialog.open(EditarPacienteComponent, { panelClass:'nuevo-paciente-container',
      data: element,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    
  }
  deletePaciente(paciente: any, index: any){
    console.log(paciente);
    this.pacienteService.deletePaciente(paciente.idPaciente).subscribe(res=>{
      console.log(res);
      this.dataSource.data.splice(index, 1);
      this.pacienteService.getpacientes().subscribe(res=>{
        this.dataSource =new MatTableDataSource(res as IPaciente[]);
      })
    })
  }
}
