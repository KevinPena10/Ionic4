import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
   email:[
    {type:"requiered", message:"El email es requerido"},
     {type:"pattern", message:"El email no es válido"},
   ],
   password:[
    {type:"requiered", message:"El password es requerido"},
    {type:"minlength", message:"Minimo 5 caracteres"},
  ],
  };
  constructor(private formBuilder: FormBuilder) { 

    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])), 
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])), 
    });

  }

  ngOnInit() {
  }

  loginUser(credentials){
    console.log(credentials);
  }

}
