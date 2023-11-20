import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaConsultaComponent } from './components/nueva-consulta/nueva-consulta.component';
import { ListaConsultasComponent } from './components/lista-consultas/lista-consultas.component';
import { PanelConsultasComponent } from './components/panel-consultas/panel-consultas.component';
import { ConsultasPageComponent } from './pages/consultas-page/consultas-page.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { ListaRecetaComponent } from './components/lista-receta/lista-receta.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NuevaConsultaComponent,
    ListaConsultasComponent,
    PanelConsultasComponent,
    ConsultasPageComponent,
    DiagnosticoComponent,
    ListaRecetaComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatTableModule,
    SharedModule
  ]
})
export class ConsultasModule { }
