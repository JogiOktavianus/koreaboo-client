import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-kmovie',
  templateUrl: './kmovie.page.html',
  styleUrls: ['./kmovie.page.scss'],
})
export class KmoviePage implements OnInit {
  kmovie = {
    id: '',
    title: '',
    synopsisShort: '',
    synopsis: '',
    movie: '',
    revised: '',
    hangul: '',
    director: '',
    writer: '',
    producer: '',
    cinematographer: '',
    releaseDate: '',
    runtime: '',
    genre: '',
    distributor: '',
    cast: [
    ],
    poster: '',
  };
  comments = [];
  user = [];
  message = '';

  constructor(public router: Router, private params: ActivatedRoute, private service: KoreabooService, private storage: Storage) { }

  ngOnInit() {
    const id = this.params.snapshot.paramMap.get('id');
    this.service.getKmovieId(id).subscribe(async response => {
      const res = await response.json();
      this.kmovie = res;
      const user = await this.storage.get('isLoggedIn');
      if (user) {
        this.user = user;
      }
      this.getComment();
    });
  }

  goHomeKmovie() {
    this.router.navigate(['/home-kmovie']);
  }

  async getComment() {
    const comment = await this.storage.get(`${this.kmovie.id}`);
    if (comment) {
      this.comments = JSON.parse(comment).comment;
    }
  }

  async sendComment() {
    let comment = await this.storage.get(`${this.kmovie.id}`);
    if (comment) {
      const newComment = JSON.parse(comment);
      newComment.comment.push({
        name: this.user[0].nama,
        message: this.message
      });
      await this.storage.set(`${this.kmovie.id}`, JSON.stringify(newComment));
      this.message = '';
      return this.getComment();
    }
    comment = {
      comment: [{
        name: this.user[0].nama,
        message: this.message
      }]
    };
    await this.storage.set(`${this.kmovie.id}`, JSON.stringify(comment));
    this.message = '';
    return this.getComment();
  }

}
