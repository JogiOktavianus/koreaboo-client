import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-kmovie',
  templateUrl: './home-kmovie.page.html',
  styleUrls: ['./home-kmovie.page.scss'],
})
export class HomeKmoviePage implements OnInit {
  kmovie: any;
  constructor(public router: Router, private service: KoreabooService) { }

  ngOnInit() {
    this.service.getKmovie().subscribe(async response => {
      const res = await response.json();
      this.kmovie = res;
    });
  }

  goKmovie(id) {
    this.router.navigate([`kmovie/${id}`]);
  }

}
