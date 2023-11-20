
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IConsulta } from 'src/app/shared/interfaces/i-consulta';
import { ConsultaService } from 'src/app/shared/services/consulta.service';
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
  constructor(private consultaService: ConsultaService) {
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
  
  deletePaciente(paciente: any){}

}
