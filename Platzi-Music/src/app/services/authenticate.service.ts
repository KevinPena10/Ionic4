import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) {
    //this.storage.create();

  }

  loginUser(credential) {
    return new Promise((resp, reject) => {
      if (credential.email == "test@test.com" && credential.password == "12345") {
        resp("Login correcto");
        console.log("Entro")
      } else {
        reject("login Incorreto")
      }
    });
  }

  registerUser(userData) {
    userData.password = btoa(userData.password);
    return this.storage.set('user', userData);
  }
}
