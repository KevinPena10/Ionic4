import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credential){
    return new Promise((resp, reject)=>{
      if(credential.email == "test@test.com" && credential.password == "12345"){
        resp("Login correcto");
        console.log("Entro")
      }else{
        reject("login Incorreto")
      }
    });
  }
}
