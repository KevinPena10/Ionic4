import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SongsModalPageModule } from './songs-modal/songs-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SongsModalPageModule,
    IonicStorageModule.forRoot()

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
