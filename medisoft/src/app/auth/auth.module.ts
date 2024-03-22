import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { FormsModule } from '@angular/forms';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SharedModule } from '../shared/shared.module';
import { VerifiedPageComponent } from './pages/verified-page/verified-page.component';



@NgModule({
  declarations: [
    SignInComponent,
    AuthPageComponent,
    PasswordRecoveryComponent,
    VerifiedPageComponent
  ],
  exports: [
    SignInComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule
    ,FormsModule
    ,SharedModule
    
  ]
})
export class AuthModule { }
