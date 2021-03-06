import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-vshow',
  templateUrl: './vshow.page.html',
  styleUrls: ['./vshow.page.scss'],
})
export class VshowPage implements OnInit {
  kvarietyshow = {
    id: '',
    title: '',
    synopsisShort: '',
    synopsis: '',
    aka: '',
    airTime: '',
    director: '',
    broadcastNetwork: '',
    released: '',
    cast: [
    ],
    poster: ''
  };
  comments = [];
  user = [];
  message = '';

  constructor(public router: Router, private params: ActivatedRoute, private service: KoreabooService, private storage: Storage) { }

  ngOnInit() {
    const id = this.params.snapshot.paramMap.get('id');
    this.service.getKvarietyshowId(id).subscribe(async response => {
      const res = await response.json();
      this.kvarietyshow = res;
      const user = await this.storage.get('isLoggedIn');
      if (user) {
        this.user = user;
      }
      this.getComment();
    });
  }

  goHomeVshow() {
    this.router.navigate(['/home-vshow']);
  }

  async getComment() {
    const comment = await this.storage.get(`${this.kvarietyshow.id}`);
    if (comment) {
      this.comments = JSON.parse(comment).comment;
    }
  }

  async sendComment() {
    let comment = await this.storage.get(`${this.kvarietyshow.id}`);
    if (comment) {
      const newComment = JSON.parse(comment);
      newComment.comment.push({
        name: this.user[0].nama,
        message: this.message
      });
      await this.storage.set(`${this.kvarietyshow.id}`, JSON.stringify(newComment));
      this.message = '';
      return this.getComment();
    }
    comment = {
      comment: [{
        name: this.user[0].nama,
        message: this.message
      }]
    };
    await this.storage.set(`${this.kvarietyshow.id}`, JSON.stringify(comment));
    this.message = '';
    return this.getComment();
  }
}
