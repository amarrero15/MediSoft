import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoMedicamentoComponent } from './components/nuevo-medicamento/nuevo-medicamento.component';
import { PanelMedicamentosComponent } from './components/panel-medicamentos/panel-medicamentos.component';
import { MedicamentosPageComponent } from './pages/medicamentos-page/medicamentos-page.component';
import { ImagenesModule } from '../imagenes/imagenes.module';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ListaMedicamentosComponent } from './components/lista-medicamentos/lista-medicamentos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NuevoMedicamentoComponent,
    PanelMedicamentosComponent,
    MedicamentosPageComponent,
    ListaMedicamentosComponent
  ],
  exports: [
    NuevoMedicamentoComponent,
    PanelMedicamentosComponent,
    MedicamentosPageComponent,
    ListaMedicamentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImagenesModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    SharedModule
  ]
})
export class FarmaciaModule { }
