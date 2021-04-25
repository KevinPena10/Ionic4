import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ApiService} from '../services/api.service';
import {SongsModalPage} from "../songs-modal/songs-modal.page";
@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage {

    artists: any[] = [];
    songs: any[] = [];
    albums: any[] = [];

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
        //componentesProps sirve de intermediaron entre el home y el modal
        //Basicamente por aquí se le envian los parametros que se
        //necesitan en el otro lado
        componentProps: { 
         songs: songs.tracks, //Parametros de Inicialización 
         artist: artist.name, //Del modal
        } 
      });
      return await modal.present();
    }

  

}
