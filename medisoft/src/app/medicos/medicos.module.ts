import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoPersonalComponent } from './components/nuevo-personal/nuevo-personal.component';
import { ListaPersonalComponent } from './components/lista-personal/lista-personal.component';
import { EditarPersonalComponent } from './components/editar-personal/editar-personal.component';
import { PanelPersonalComponent } from './components/panel-personal/panel-personal.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ImagenesModule } from '../imagenes/imagenes.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NuevoPersonalComponent,
    ListaPersonalComponent,
    EditarPersonalComponent,
    PanelPersonalComponent,
    PersonalPageComponent
  ],
  imports: [
    CommonModule
    ,FormsModule
    ,MatFormFieldModule
    ,MatIconModule
    ,MatInputModule
    ,MatPaginatorModule
    ,MatSortModule
    ,MatTabsModule
    ,MatTableModule
    ,ImagenesModule
    ,SharedModule
  ]
})
export class MedicosModule { }
