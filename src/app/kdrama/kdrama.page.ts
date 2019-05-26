import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-kdrama',
  templateUrl: './kdrama.page.html',
  styleUrls: ['./kdrama.page.scss'],
})
export class KdramaPage implements OnInit {
  kdrama = {
    id: '',
    title: '',
    synopsisShort: '',
    synopsis: '',
    revised: '',
    hangul: '',
    director: '',
    writer: '',
    network: '',
    episodes: '',
    releaseDate: '',
    cast: '',
    poster: ''
  };
  comments = [];
  user = [];
  message = '';

  constructor(public router: Router, private params: ActivatedRoute, private service: KoreabooService, private storage: Storage) { }

  ngOnInit() {
    const id = this.params.snapshot.paramMap.get('id');
    this.service.getKdramaId(id).subscribe(async response => {
      const res = await response.json();
      this.kdrama = res;
      const user = await this.storage.get('isLoggedIn');
      if (user) {
        this.user = user;
      }
      this.getComment();
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  async getComment() {
    const comment = await this.storage.get(`${this.kdrama.id}`);
    if (comment) {
      this.comments = JSON.parse(comment).comment;
    }
  }

  async sendComment() {
    let comment = await this.storage.get(`${this.kdrama.id}`);
    if (comment) {
      const newComment = JSON.parse(comment);
      newComment.comment.push({
        name: this.user[0].nama,
        message: this.message
      });
      await this.storage.set(`${this.kdrama.id}`, JSON.stringify(newComment));
      this.message = '';
      return this.getComment();
    }
    comment = {
      comment: [{
        name: this.user[0].nama,
        message: this.message
      }]
    };
    await this.storage.set(`${this.kdrama.id}`, JSON.stringify(comment));
    this.message = '';
    return this.getComment();
  }
}
