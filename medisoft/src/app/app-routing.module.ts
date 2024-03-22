import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { PacientesPageComponent } from './pacientes/pages/pacientes-page/pacientes-page.component';
import { MedicamentosPageComponent } from './farmacia/pages/medicamentos-page/medicamentos-page.component';
import { ConsultasPageComponent } from './consultas/pages/consultas-page/consultas-page.component';
import { PersonalPageComponent } from './medicos/pages/personal-page/personal-page.component';
import { AjustesPageComponent } from './ajustes/pages/ajustes-page/ajustes-page.component';
import { ReportesPageComponent } from './reportes/pages/reportes-page/reportes-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NoLoginGuard } from './shared/guards/no-login.guard';
import { VerifiedPageComponent } from './auth/pages/verified-page/verified-page.component';
import { VerifiedAccountGuard } from './shared/guards/verified-account.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticacion',
    pathMatch: 'full'
  },
  {path:'ajustes', component:AjustesPageComponent, canActivate:[]},
  {path:'autenticacion', component:AuthPageComponent, canActivate:[] },
  {path:'consultas', component:ConsultasPageComponent, canActivate:[]},
  {path:'farmacia', component:MedicamentosPageComponent, canActivate:[]},
  {path:'inicio', component:HomePageComponent, canActivate:[]},
  {path:'pacientes', component:PacientesPageComponent, canActivate:[]},
  {path:'personal', component:PersonalPageComponent, canActivate:[]},
  {path:'reportes', component:ReportesPageComponent, canActivate:[]},
  {path:'verificacion', component:VerifiedPageComponent, canActivate:[]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
