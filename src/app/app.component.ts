import { Component, OnInit, OnChanges } from '@angular/core';

import { Platform, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AccPopoverComponent } from './acc-popover/acc-popover.component';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'K-Drama',
      url: '/home',
      icon: 'md-home'
    },
    {
      title: 'K-Pop',
      url: '/home-kpop',
      icon: 'md-musical-notes'
    },
    {
      title: 'K-Movie',
      url: '/home-kmovie',
      icon: 'videocam'
    },
    {
      title: 'Variety Show',
      url: '/home-vshow',
      icon: 'videocam'
    }
  ];
  data = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public popoverController: PopoverController,
    public router: Router,
    private storage: Storage,
    private location: Location
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.checkData();
  }

  async checkData() {
    const data = await this.storage.get('isLoggedIn');
    if (data) {
      this.data = data[0].nama;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: AccPopoverComponent,
      event
    });
    return await popover.present();
  }

  async logout() {
    console.log('clicked');
    await this.storage.clear();
    window.location.reload();
  }

}
