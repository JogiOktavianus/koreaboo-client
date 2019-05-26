import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-vshow',
  templateUrl: './home-vshow.page.html',
  styleUrls: ['./home-vshow.page.scss'],
})
export class HomeVshowPage implements OnInit {
  kvarietyshow: any;
  constructor(public router: Router, private service: KoreabooService) { }

  ngOnInit() {
    this.service.getKvarietyshow().subscribe(async response => {
      const res = await response.json();
      this.kvarietyshow = res;
    });
  }

  goVshow(id) {
    this.router.navigate([`vshow/${id}`]);
  }

}
