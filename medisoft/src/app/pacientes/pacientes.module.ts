import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { PacientesPageComponent } from './pages/pacientes-page/pacientes-page.component';
import { PanelPacientesComponent } from './components/panel-pacientes/panel-pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ImagenesModule } from '../imagenes/imagenes.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NuevoPacienteComponent,
    ListaPacientesComponent,
    EditarPacienteComponent,
    PacientesPageComponent,
    PanelPacientesComponent
  ],
  exports:[ListaPacientesComponent,PacientesPageComponent,PanelPacientesComponent],
  imports: [
    CommonModule
    ,FormsModule
    ,ImagenesModule
    ,MatFormFieldModule
    ,MatIconModule
    ,MatInputModule
    ,MatPaginatorModule
    ,MatSortModule
    ,MatTabsModule
    ,MatTableModule
    ,ReactiveFormsModule
    ,SharedModule
  ]
})
export class PacientesModule { }
