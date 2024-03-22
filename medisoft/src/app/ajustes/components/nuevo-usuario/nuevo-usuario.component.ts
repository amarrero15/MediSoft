import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AjustesService } from 'src/app/shared/services/ajustes.service';
@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {
  tipos:any;
  datosUsuario:any={
    nombre:'',
    idTipo:0,
    email:'',
    password:'',
    uid:''
  }
  samePassword='';
  passwordColor='#6C757D';
  emailColor='#6C757D';
  lengthColor='#6C757D';
  upperColor='#6C757D';
  numberColor='#6C757D';
  emailValid=false;
  passwordLength=true;
  passwordUpper=true;
  passwordNumber=true;
  passwordConfirmation=false;
  constructor(private ajustesService:AjustesService,private authService:AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTipoUsuario();
  }

  agregarUsuario(){
    if(this.datosUsuario.nombre!=''&&this.datosUsuario.idTipo!=0&&this.datosUsuario.email!=''&&this.validatePassword()){
      this.authService.createFirebaseAccount(this.datosUsuario).then(res=>{
        this.operacionExitosa();
      });
    }else{
      this.operacionFallida();
    }
  }

  confirmPassword(){
    if(this.datosUsuario.password === this.samePassword){
      this.passwordColor='#0B9B72'
      this.passwordConfirmation=true;
      return true;
    }else{
      this.passwordColor='#E63256'
      this.passwordConfirmation=false;
      return false;
    }
  }

  getTipoUsuario(){
    this.ajustesService.getTipoUsuario().subscribe(res=>{
      this.tipos=res;
    })
  }
  operacionExitosa(): void {
    let data={
      title:'Usuario Registrado',
      messagge:'El usuario se ha registrado exitosamente',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {

      this.datosUsuario={
        nombre:'',
        idTipo:0,
        email:'',
        password:''
      }
    });
    
  }

  operacionFallida(): void {
    let data={
      title:'Error',
      messagge:'El usuario no se ha registrado. Por favor los datos.',
      command:'Continuar'
    }
    const dialogRef = this.dialog.open(PopupComponent, { panelClass:'popup-container',
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }

  setTipo(){
    var e = document.getElementById("tipoUsuario") as HTMLSelectElement;
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    this.datosUsuario.idTipo=parseInt(value);
  }

  validarEmail(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.datosUsuario.email)){
      this.emailValid=false
    }else{
      this.emailColor='#E63256'
      this.emailValid=true;
    }
  }

  validatePassword(){
    if(this.emailValid===false&&this.passwordLength===true && this.passwordUpper===true && this.passwordNumber===true){
      return true;
    }else{
      return false;
    }
  }
  validatePasswordLength(){
    if(this.datosUsuario.password.length>=8){
      this.lengthColor='#0B9B72'
      this.passwordLength=true;
    }else{
      this.lengthColor='#E63256'
      this.passwordLength=false;
    }
  }
  validatePasswordUpper(){
    var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    for(let i=0; i<this.datosUsuario.password.length; i++){
      if (letras_mayusculas.indexOf(this.datosUsuario.password.charAt(i),0)!=-1){
        this.upperColor='#0B9B72'
        this.passwordUpper=true;
         return true;
      }
   }
   this.upperColor='#E63256'
   this.passwordUpper=false;
   return false;
  }
  validateNumberPassword(){
    var numeros="0123456789";
    for(let i=0; i<this.datosUsuario.password.length; i++){
      if (numeros.indexOf(this.datosUsuario.password.charAt(i),0)!=-1){
        this.numberColor='#0B9B72'
        this.passwordNumber=true;
         return true;
      }
   }
   this.numberColor='#E63256'
   this.passwordNumber=false;
   return false;  
  }
  

}
