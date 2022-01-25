import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async login (email: string, pass: string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email,pass);
    }
    catch (err){
      console.log("Error en el Login", err);
      return null;
    }
  }

  async register (email: string, pass: string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,pass);
    }
    catch (err){
      console.log("Error en el Login", err);
      return null;
    }
  }

  async loginWithGoogle (email: string, pass: string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch (err){
      console.log("Error en el Login con Google", err);
      return null;
    }
  }
}
