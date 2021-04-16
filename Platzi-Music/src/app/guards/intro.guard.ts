import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
  }

  async canActivate() {
    const isIntroShowed = await this.storage.get('iSIntroShowed');
    if (isIntroShowed) {
      return true;
    } else {
      this.router.navigateByUrl("/intro");
    }

  }

}
