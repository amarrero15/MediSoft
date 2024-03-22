import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PopupComponent
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class SharedModule { }
