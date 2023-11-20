import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IMedicamento } from '../../../shared/interfaces/i-medicamento';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrls: ['./lista-medicamentos.component.scss']
})
export class ListaMedicamentosComponent implements AfterViewInit {
  displayedColumns: string[] = ['idMedicamento', 'nombre', 'cantidad', 'precio', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<IMedicamento>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private farmaciaService:FarmaciaService) {
    this.farmaciaService.getMedicamentos().subscribe(res=>{
      this.dataSource =new MatTableDataSource(res as IMedicamento[]);
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
