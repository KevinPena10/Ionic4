import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) {
    //this.storage.create();

  }

  async loginUser(credential) {
    const user = await this.storage.get('user');
    return new Promise((resp, reject) => {
      if (user.email == credential.email && btoa(credential.password) == user.password) {
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
