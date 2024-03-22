import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { FarmaciaModule } from './farmacia/farmacia.module';
import { ConsultasModule } from './consultas/consultas.module';
import { MedicosModule } from './medicos/medicos.module';

import { firebaseConfig } from 'src/environments/environment.prod';
import {AngularFireModule} from '@angular/fire/compat'

import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ReportesModule } from './reportes/reportes.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AjustesModule } from './ajustes/ajustes.module';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AjustesModule,
   AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthModule,
    BrowserModule,
    ConsultasModule,
    FarmaciaModule,
    HomeModule,
    HttpClientModule,
    PacientesModule,
    MedicosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReportesModule,NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
