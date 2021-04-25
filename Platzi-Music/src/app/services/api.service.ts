import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { 
  }

  getArtists(){
    return dataArtists.items;
  }

  getNewReleases(){
    return fetch("https://platzi-music-api.herokuapp.com/browse/new-releases").then(
      Response=> Response.json()
    )
  }

  getArtistsTopTracks(artistId){
    return fetch(
      `https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`
      ).then(
      response=> response.json()
      );
  }
}
