import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePanelComponent } from './components/home-panel/home-panel.component';
import { FunctionCardComponent } from './components/function-card/function-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



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
    CommonModule
  ]
})
export class HomeModule { }
