import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AjustesService } from 'src/app/shared/services/ajustes.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre','tipo', 'email', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  usuarios:any;
  constructor(private ajustesService:AjustesService,public dialog: MatDialog ) { 
    this.ajustesService.getUsuarios().subscribe(res=>{
      this.dataSource =new MatTableDataSource(res as any[]);
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.ajustesService.getUsuarios().subscribe(res=>{
      this.usuarios=res;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarUsuario(element: any): void {
    console.log(element);
    
    const dialogRef = this.dialog.open(EditarUsuarioComponent, { panelClass:'nuevo-paciente-container',
      data: element,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    
  }
  deleteUsuario(usuario: any, index: any){
    this.ajustesService.deleteUsuario(usuario.idUsuario).subscribe(res=>{
      console.log(res);
      this.dataSource.data.splice(index, 1);
      this.ajustesService.getUsuarios().subscribe(res=>{
        this.dataSource =new MatTableDataSource(res as any[]);
      })
    })
  }

}
