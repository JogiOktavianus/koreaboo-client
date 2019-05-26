import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class KoreabooService {

// tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  createAccount(nama, email, password) {
    return this.http.post('https://koreaboo-server.herokuapp.com/api/user/create-account', {
      nama,
      email,
      password
    });
  }

  login(email, password) {
    return this.http.post('https://koreaboo-server.herokuapp.com/api/user/login', {
      email,
      password
    });
  }

  getKdrama() {
    return this.http.get('https://koreaboo-server.herokuapp.com/api/kdrama');
  }

  getKdramaId(id) {
    return this.http.get(`https://koreaboo-server.herokuapp.com/api/kdrama/${id}`);
  }

  getKpop() {
    return this.http.get('https://koreaboo-server.herokuapp.com/api/kpop');
  }

  getKpopId(id) {
    return this.http.get(`https://koreaboo-server.herokuapp.com/api/kpop/${id}`);
  }

  getKmovie() {
    return this.http.get('https://koreaboo-server.herokuapp.com/api/kmovie');
  }

  getKmovieId(id) {
    return this.http.get(`https://koreaboo-server.herokuapp.com/api/kmovie/${id}`);
  }

  getKvarietyshow() {
    return this.http.get('https://koreaboo-server.herokuapp.com/api/kvarietyshow');
  }

  getKvarietyshowId(id) {
    return this.http.get(`https://koreaboo-server.herokuapp.com/api/kvarietyshow/${id}`);
  }

}
