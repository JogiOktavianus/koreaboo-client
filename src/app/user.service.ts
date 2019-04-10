import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http, public toastController: ToastController) { }
  loadUser() {
    return this.http.get('http://localhost:8081/api/user/');
  }
  register(data) {
    return this.http.post('http://localhost:8081/api/user/', data);
  }
}
