import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesPageComponent } from './pages/reportes-page/reportes-page.component';
import { ReportesPanelComponent } from './components/reportes-panel/reportes-panel.component';
import { PanelReportesComponent } from './components/panel-reportes/panel-reportes.component';



@NgModule({
  declarations: [
    ReportesPageComponent,
    ReportesPanelComponent,
    PanelReportesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportesModule { }
