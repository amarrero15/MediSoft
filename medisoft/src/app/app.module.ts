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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
