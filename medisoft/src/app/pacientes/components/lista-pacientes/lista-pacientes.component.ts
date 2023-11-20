import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IPaciente } from '../../../shared/interfaces/i-paciente';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
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
  constructor(private pacienteService:PacientesService) {
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
  
  deletePaciente(paciente: any){}
}
