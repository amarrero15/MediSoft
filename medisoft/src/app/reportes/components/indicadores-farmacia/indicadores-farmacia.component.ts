import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IIndicadoresFarmacia } from '../../../shared/interfaces/i-indicadores-farmacia';
import { ReportesService } from '../../../shared/services/reportes.service';

@Component({
  selector: 'app-indicadores-farmacia',
  templateUrl: './indicadores-farmacia.component.html',
  styleUrls: ['./indicadores-farmacia.component.scss']
})
export class IndicadoresFarmaciaComponent implements AfterViewInit {
  displayedColumns: string[] = ['medicamento', 'unidades', 'recetas', 'existencias'];
  dataSource!: MatTableDataSource<IIndicadoresFarmacia>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private reportesService:ReportesService) { 
    this.reportesService.getIndicadoresFarmacia().subscribe(res=>{
      this.dataSource =new MatTableDataSource(res as IIndicadoresFarmacia[]);
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

}
