import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage {

    artists = [
        {},
        {},
        {},
        {}, {}, {}
    ];
    songs : any[] = [];
    albums : any[] = [];

    slideOps = {
        initialSlide: 2,
        slidesPerView: 4,
        centeredSlides: true,
        speed: 400
    };
    constructor(private musicService : ApiService) {}

    ionViewDidEnter() {
        this.musicService.getNewReleases().then((resp) => {
            this.artists = resp.albums.items;
            this.songs = resp.albums.items.filter(o => o.album_type == "single");
            this.albums = resp.albums.items.filter(o => o.album_type  == "album");
          })
    }

}
