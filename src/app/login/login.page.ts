import { Component, OnInit } from '@angular/core';
import { KoreabooService } from '../koreaboo.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  constructor(public router: Router, public storage: Storage, public service: KoreabooService) { }

  ngOnInit() {
  }

  onLogin() {
    this.service.login(this.username, this.password).subscribe(async response => {
      const newResponse = await response.json();
      if (newResponse) {
        await this.storage.set('isLoggedIn', newResponse);
        return setTimeout(() => {
          this.router.navigate(['home'], { replaceUrl: true });
        }, 500);
      }
    });
  }

  goToCreate() {
    this.router.navigate(['register']);
  }

}
