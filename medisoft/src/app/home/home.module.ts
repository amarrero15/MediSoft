import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePanelComponent } from './components/home-panel/home-panel.component';
import { FunctionCardComponent } from './components/function-card/function-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePanelComponent,
    FunctionCardComponent,
    HomePageComponent
  ],
  exports: [
    HomePanelComponent,
    FunctionCardComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
