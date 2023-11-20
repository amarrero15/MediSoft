import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { PacientesPageComponent } from './pacientes/pages/pacientes-page/pacientes-page.component';
import { MedicamentosPageComponent } from './farmacia/pages/medicamentos-page/medicamentos-page.component';
import { ConsultasPageComponent } from './consultas/pages/consultas-page/consultas-page.component';
import { PersonalPageComponent } from './medicos/pages/personal-page/personal-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticacion',
    pathMatch: 'full'
  },
  {path:'autenticacion', component:AuthPageComponent},
  {path:'consultas', component:ConsultasPageComponent},
  {path:'farmacia', component:MedicamentosPageComponent},
  {path:'inicio', component:HomePageComponent},
  {path:'pacientes', component:PacientesPageComponent},
  {path:'personal', component:PersonalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
