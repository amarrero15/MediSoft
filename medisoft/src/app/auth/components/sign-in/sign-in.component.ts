import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  authData={
    email:''
   ,password:''
 }
 constructor(private authService:AuthService, private route: Router) { }

 ngOnInit(): void {
 }

 signIn(){
  this.route.navigate(['inicio'])
  /*
  this.authService.login(this.authData.email, this.authData.password).then(res=>{
    this.route.navigate(['inicio']);
  })*/
   
 }

}
