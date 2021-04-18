import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credential){
    return new Promise((resp, reject)=>{
      if(credential.email == "test@tets.com" && credential.password == "12345"){
        resp("Login correcto");
      }else{
        reject("login Incorreto")
      }
    });
  }
}
