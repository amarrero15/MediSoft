import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarAvatarComponent } from './components/cargar-avatar/cargar-avatar.component';



@NgModule({
  declarations: [
    CargarAvatarComponent
  ],
  exports: [
    CargarAvatarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImagenesModule { }
