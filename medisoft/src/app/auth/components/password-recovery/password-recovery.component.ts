import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog';
@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  email='';


  emailColor='#6C757D';
  lengthColor='#6C757D';
  upperColor='#6C757D';
  emailValid=false;

  constructor(private authService:AuthService, public dialogRef: MatDialogRef<PasswordRecoveryComponent>) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.authService.forgotPassword(this.email);
    this.dialogRef.close();

  }

  validarEmail(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)){
      this.emailValid=false
    }else{
      this.emailColor='#E63256'
      this.emailValid=true;
    }
  }

}
