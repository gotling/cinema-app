import {inject} from 'aurelia-framework';
import {CinemaService} from './cinema-service';

@inject(CinemaService)
export class Remote {
  constructor(service) {
    this.service = service;
  }

  play() {
    this.service.play();
  }

  stop() {
    this.service.stop();
  }

  fwd30() {
    this.service.fwd30();
  }

  fwd600() {
    this.service.fwd600();
  }

  back30() {
    this.service.back30();
  }

  back600() {
    this.service.back600();
  }

  subtitleToggle() {
    this.service.subtitleToggle();
  }

  subtitleNext() {
    this.service.subtitleNext();
  }

  volumeUp() {
    this.service.volumeUp();
  }

  volumeDown() {
    this.service.volumeDown();
  }
}
