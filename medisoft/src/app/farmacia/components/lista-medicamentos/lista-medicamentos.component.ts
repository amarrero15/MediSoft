import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IMedicamento } from '../../../shared/interfaces/i-medicamento';
import { FarmaciaService } from 'src/app/shared/services/farmacia.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { EditarMedicamentoComponent } from '../editar-medicamento/editar-medicamento.component';
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
  constructor(private farmaciaService:FarmaciaService, public dialog: MatDialog) {
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

  editarMedicamento(element: any): void {
    console.log(element);
    
    const dialogRef = this.dialog.open(EditarMedicamentoComponent, { panelClass:'nuevo-paciente-container',
      data: element,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    
  }
  
  deleteMedicamento(medicamento: any, index: any){
    this.farmaciaService.deleteMedicamento(medicamento.idMedicamento).subscribe(res=>{
      this.dataSource.data.splice(index, 1);
      this.farmaciaService.getMedicamentos().subscribe(res=>{
        this.dataSource =new MatTableDataSource(res as IMedicamento[]);
      })
    })
  }

}
