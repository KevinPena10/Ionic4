import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { 
  }

  getNewReleases(){
    return fetch("https://platzi-music-api.herokuapp.com/browse/new-releases").then(
      Response=> Response.json()
    )
  }
}
