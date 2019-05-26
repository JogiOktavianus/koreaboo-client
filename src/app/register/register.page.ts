import { Storage } from '@ionic/storage';
import { KoreabooService } from '../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: any;
  username: any;
  password: any;

  constructor(public router: Router, public storage: Storage, public service: KoreabooService) { }

  ngOnInit() {
  }

  onCreateAccount() {
    this.service.createAccount(this.name, this.username, this.password).subscribe(async response => {
      if (response) {
        this.onLogin();
      }
    });
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

  goToLogin() {
    this.router.navigate(['login']);
  }
}
