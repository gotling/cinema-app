//let baseUrl = 'http://localhost:3000/';
let baseUrl = 'http://cinema.lan/';

export class CinemaService {
  getMovies() {
    return get('list');
  }

  getPlaylist() {
    return get('playlist');
  }

  play() {
    return post('control/play');
  }

  playNow(movie) {
    return post('play-now', movie);
  }

  stop() {
    return post('control/stop');
  }

  fwd30() {
    return post('control/fwd30');
  }

  fwd600() {
    return post('control/fwd600');
  }

  back30() {
    return post('control/back30');
  }

  back600() {
    return post('control/back600');
  }

  subtitleToggle() {
    return post('control/subtitle.toggle');
  }

  subtitleNext() {
    return post('control/subtitle.next');
  }

  volumeUp() {
    return post('control/volume.up');
  }

  volumeDown() {
    return post('control/volume.down');
  }
}

function get(path) {
  let init = {
      method: 'GET',
      mode: 'cors'
  };

  return fetch(baseUrl + path, init).then(response => response.json()).then(result => {
    return result;
  });
}

function post(path, data = false) {
  let init = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  };

  console.log(data);

  if (data) {
    init['body'] = JSON.stringify(data);
  }

  return fetch(baseUrl + path, init);
}
