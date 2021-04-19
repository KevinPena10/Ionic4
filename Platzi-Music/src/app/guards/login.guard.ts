import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})


export class LoginGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
  }

  async canActivate() {
    const isUserLoggedIn = await  this.storage.get('isUserLoggedIn');
    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
    }

  }
  
}
