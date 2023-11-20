import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent,
    AuthPageComponent
  ],
  exports: [
    SignInComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule
    ,FormsModule
    
  ]
})
export class AuthModule { }
