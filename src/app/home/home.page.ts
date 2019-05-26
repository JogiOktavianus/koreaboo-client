import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  kdrama: any;
  constructor(public router: Router, private service: KoreabooService) { }

  ngOnInit() {
    this.service.getKdrama().subscribe(async response => {
      const res = await response.json();
      this.kdrama = res;
    });
  }

  goKdrama(id) {
    this.router.navigate([`kdrama/${id}`]);
  }

}
