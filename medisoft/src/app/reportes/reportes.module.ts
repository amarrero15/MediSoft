import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesPageComponent } from './pages/reportes-page/reportes-page.component';

import { PanelReportesComponent } from './components/panel-reportes/panel-reportes.component';
import { IndicadoresConsultasComponent } from './components/indicadores-consultas/indicadores-consultas.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts/public-api';
import { AtencionConsultasComponent } from './components/charts/atencion-consultas/atencion-consultas.component';
import { IndicadoresFarmaciaComponent } from './components/indicadores-farmacia/indicadores-farmacia.component';
@NgModule({
  declarations: [
    ReportesPageComponent,
    PanelReportesComponent,
    IndicadoresConsultasComponent,
    AtencionConsultasComponent,
    IndicadoresFarmaciaComponent
  ],
  exports: [
    ReportesPageComponent,
    PanelReportesComponent
  ],
  imports: [
    CommonModule,
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
export class ReportesModule { }
