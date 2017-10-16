import {inject} from 'aurelia-framework';
import {CinemaService} from 'cinema-service';

import 'bootstrap';

@inject(CinemaService)
export class Accordion {
  constructor(service) {
    this.service = service;
    this.service.getPlaylist().then(movies => {
      this.movies = movies;
    })
  }

  playNow(movie) {
    this.service.playNow(movie);
  }

  getImageUrl(movie) {
  }
}
