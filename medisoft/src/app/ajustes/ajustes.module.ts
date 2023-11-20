import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjustesPageComponent } from './pages/ajustes-page/ajustes-page.component';
import { PanelAjustesComponent } from './components/panel-ajustes/panel-ajustes.component';



@NgModule({
  declarations: [
    AjustesPageComponent,
    PanelAjustesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AjustesModule { }
