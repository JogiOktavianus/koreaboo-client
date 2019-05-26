import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-kpop',
  templateUrl: './home-kpop.page.html',
  styleUrls: ['./home-kpop.page.scss'],
})
export class HomeKpopPage implements OnInit {
  kpop: any;

  constructor(public router: Router, private service: KoreabooService) { }

  ngOnInit() {
    this.service.getKpop().subscribe(async response => {
      const res = await response.json();
      this.kpop = res;
    });
  }

  goKpop(id) {
    this.router.navigate([`kpop/${id}`]);
  }

}
