import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "requiered", message: "El nombre es requerido" },
      { type: "pattern", message: "Ingrese solo letras"},
      { type: "minlength", message: "El nombre debe tener mínimo tres letras" },
    ],
    apellido: [
      { type: "requiered", message: "El apellido es requerido" },
      { type: "pattern", message: "Ingrese solo letras"},
      { type: "minlength", message: "El apellido debe tener mínimo tres letras"},
    ],
    email: [
      { type: "requiered", message: "El email es requerido" },
      { type: "pattern", message: "El email no es válido" },
    ],
    password: [
      { type: "requiered", message: "El password es requerido" },
      { type: "minlength", message: "Minimo 5 caracteres" },
    ],
  };

  errorMessage: string = "";


  constructor(
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController, 
    private storage: Storage) {

    //this.storage.create();

    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z ]+"),
        Validators.minLength(3),
      ])),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z ]+"),
        Validators.minLength(3),
      ])),
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

  register(userData){
   this.authService.registerUser(userData).then(()=>{
    this.navCtrl.navigateBack("/login");
   });
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

}
