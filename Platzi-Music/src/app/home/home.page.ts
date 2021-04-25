import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ApiService} from '../services/api.service';
import {SongsModalPage} from "../songs-modal/songs-modal.page";
@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage {

    artists: any[] = [];
    songs: any[] = [];
    albums: any[] = [];
    song: any = {};

    slideOps = {
        initialSlide: 2,
        slidesPerView: 4,
        centeredSlides: true,
        speed: 400
    };
    constructor(private musicService : ApiService, private modalController: ModalController) {}

    ionViewDidEnter() {
        this.musicService.getNewReleases().then((resp) => {
            this.artists = this.musicService.getArtists();
            this.songs = resp.albums.items.filter(o => o.album_type == "single");
            this.albums = resp.albums.items.filter(o => o.album_type  == "album");
          })
    }

    async showSongs(artist){
      const songs = await this.musicService.getArtistsTopTracks(artist.id);
      const modal = await this.modalController.create({
        component: SongsModalPage,
        componentProps: { 
         songs: songs.tracks, //Parametros enviados al modal
         artist: artist.name, 
        } 
      });

      modal.onDidDismiss().then(dataReturned=>{
        if (dataReturned.data == null) {
          this.song = {};
        } else {
          this.song = dataReturned.data;
        }
        console.log(this.song)
      });

      return await modal.present();
    }

  

}
