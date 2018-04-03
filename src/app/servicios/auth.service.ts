import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }


  // creacion de usuarios
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
    err => reject (err));
    });
  }

  // login  usuario
  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
    err => reject (err));
    });
  }

  // usuario logueado, devolver data

  getAuth() {
    return this.afAuth.authState.map( auth => auth );
  }

  // metodo logout
  logout() {
    return this.afAuth.auth.signOut();
  }

  // login con google

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

}
