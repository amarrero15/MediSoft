import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjustesPageComponent } from './pages/ajustes-page/ajustes-page.component';
import { PanelAjustesComponent } from './components/panel-ajustes/panel-ajustes.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { PadecimientosComponent } from './components/padecimientos/padecimientos.component';
import { FormsModule } from '@angular/forms';
import { ImagenesModule } from '../imagenes/imagenes.module';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    AjustesPageComponent,
    PanelAjustesComponent,
    NuevoUsuarioComponent,
    PadecimientosComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent
  ],
  exports: [
    AjustesPageComponent,
    PanelAjustesComponent,
    NuevoUsuarioComponent,
    PadecimientosComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImagenesModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatTableModule,
    SharedModule
  ]
})
export class AjustesModule { }
