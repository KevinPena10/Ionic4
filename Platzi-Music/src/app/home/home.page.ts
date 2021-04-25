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
    currentSong: any = {};
    newTime;
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

    async showSongsByAlbum(album){
      const songs = await this.musicService.getAlbumTracks(album.id);
      console.log("" , songs);
      const modal = await this.modalController.create({
        component: SongsModalPage,
        componentProps: { 
         songs: songs.items, //Parametros enviados al modal
         artist: album.name, 
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


   

    play() {
      this.currentSong = new Audio(this.song.preview_url);
      this.currentSong.play();
      this.currentSong.addEventListener("timeupdate", () => {
        this.newTime = ( 1 / this.currentSong.duration ) * this.currentSong.currentTime;
        if(this.parseTime(this.currentSong.currentTime)  === "00:30"){
          this.song.playing = false;
        }
     
      });
      this.song.playing = true;

     
    }

    pause() {
      this.currentSong.pause();
      this.song.playing = false;
    }
  
    parseTime(time) {
      if (time) {
        
        const partTime = parseInt(time.toString().split(".")[0], 10);
        
        let minutes = Math.floor(partTime / 60).toString(); //un minuto lo dividimos en 60 segs

        if (minutes.length == 1) {
          minutes = "0" + minutes;
        }
        let seconds = (partTime % 60).toString();
        if (seconds.length == 1) {
          seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
      }
    }
  }

