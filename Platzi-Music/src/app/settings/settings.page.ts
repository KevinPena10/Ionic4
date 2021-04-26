import { Component} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  userImage ="assets/img/user.jpg";
  photo: SafeResourceUrl;
  userData: any = {};
   
  constructor(private sanitizer: DomSanitizer, private storage: Storage) { 
    this.getUserData();
    
  }

  async getUserData(){
    this.userData = await this.storage.get('user');
  }



  async takePhoto(){
   const image = await Plugins.Camera.getPhoto({
     quality: 100,
     allowEditing: false,
     resultType:CameraResultType.DataUrl,
     source: CameraSource.Camera
   });
  
    this.photo =  this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  
  }

}
