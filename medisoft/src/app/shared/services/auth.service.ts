import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import {AngularFirestore} from '@angular/fire/compat/firestore';
//import { AngularFireStorage } from '@angular/fire/compat/storage';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI=environment.MSAPI
  constructor(
    //public AFauth: AngularFireAuth
    public router: Router
    //private db: AngularFirestore
    ,private http:HttpClient
  ) { }

  createFirebaseAccount(userInfo:any){
    /*
    return new Promise ((resolve, rejected) => {
      console.log(userInfo);
      this.AFauth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then(res => {
        res.user?.sendEmailVerification();
        //const uid = userId;
        const uid = res.user?.uid as string;
        //userInfo.userName=res.user?.displayName as string
        userInfo.uid=uid;
        this.db.collection('users').doc(uid.toString()).set({
          //nombre: user.nombre,
          userName:userInfo.userName,
          uid: uid,
        });
        resolve(res);
      }).catch(err => rejected(err));
      
    }
  
    );*/
  }


  login(email: string, password: string) {
    /*
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        //localStorage.setItem('userId', user.user?.uid.toString() as string);
        localStorage.setItem('uid', user.user?.uid.toString() as string);
        resolve(user);
      }).catch(err => rejected(err));
    });
    */
  }

  logout() {
    /*
    this.AFauth.signOut().then(auth =>{
      localStorage.removeItem('userId');
      localStorage.removeItem('uid');
      this.router.navigate(['/home']);
    })
    */
  }

  forgotPassword(email:string){
    /*
    this.AFauth.sendPasswordResetEmail(email);
    */
  }

  getAuthState(){
    /*
    return this.AFauth.authState.pipe(map(auth=>{
      if(auth===null || auth===undefined){
        return false;
      }else{
        return true;
      }
    }))
    */
  }


}
