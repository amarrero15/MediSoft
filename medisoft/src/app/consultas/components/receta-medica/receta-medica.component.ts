import { Component, OnInit,Input, AfterViewInit, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IConsulta } from 'src/app/shared/interfaces/i-consulta';
import { IReceta } from 'src/app/shared/interfaces/i-receta';
import { ConsultaService } from 'src/app/shared/services/consulta.service';

@Component({
  selector: 'app-receta-medica',
  templateUrl: './receta-medica.component.html',
  styleUrls: ['./receta-medica.component.scss']
})
export class RecetaMedicaComponent implements OnInit {
  displayedColumns: string[] = ['medicamento', 'cantidad', 'dosis'];
  dataSource!: MatTableDataSource<IReceta>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() receta:IReceta[]=[]
  constructor() {
    this.dataSource =new MatTableDataSource(this.receta);
  }

  ngOnInit(): void {
    this.dataSource =new MatTableDataSource<IReceta>(this.receta);
  }

  ngAfterViewInit(): void {
    this.dataSource =new MatTableDataSource<IReceta>(this.receta);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    /*
    this.farmaciaService.getMedicamentos().subscribe(res=>{
      this.pacientes=res;
      console.log(this.pacientes);
    })*/
  }

  ngOnChanges(changes: SimpleChanges){
    this.dataSource =new MatTableDataSource<IReceta>(this.receta);
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
