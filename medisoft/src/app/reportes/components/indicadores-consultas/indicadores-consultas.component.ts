
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IIndicadoresConsulta } from 'src/app/shared/interfaces/i-indicadores-consulta';
import { ReportesService } from 'src/app/shared/services/reportes.service';
@Component({
  selector: 'app-indicadores-consultas',
  templateUrl: './indicadores-consultas.component.html',
  styleUrls: ['./indicadores-consultas.component.scss']
})
export class IndicadoresConsultasComponent implements AfterViewInit {
  displayedColumns: string[] = ['status', 'consultas'];
  dataSource!: MatTableDataSource<IIndicadoresConsulta>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private reportesService: ReportesService, ) {
    this.reportesService.getIndicadoresConsultas().subscribe(res=>{
      this.dataSource =new MatTableDataSource(res as IIndicadoresConsulta[]);
    })
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

}
