import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor(public router: Router) {}
  error = false;

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      (error) => console.log(error)
    );
  }

  signInUser(email: string, password: string) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then((x) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
          this.router.navigate(['/list']);
          firebase.auth().currentUser.getIdToken().then(
              (token) => {
                localStorage.setItem('token', token);
                localStorage.setItem('role', this.matchRole(email));
              }
            );
          },
        () => this.error = true
        );
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return this.getToken() !== null;
  }

  logout() {
    firebase.auth().signOut();
    localStorage.clear();
  }

  private matchRole(email: string) {
    if (email.match('@put.poznan.pl')) {
      return 'mentor';
    } else {
      return 'student';
    }
  }

  public isStudent() {
    return localStorage.getItem('role') === 'student';
  }

  public getUser() {
    return firebase.auth().currentUser.email;
  }

  public hasLogged() {
    return this.error;
  }
}
