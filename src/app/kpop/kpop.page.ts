import { KoreabooService } from './../koreaboo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-kpop',
  templateUrl: './kpop.page.html',
  styleUrls: ['./kpop.page.scss'],
})
export class KpopPage implements OnInit {
  kpop = {
    id: '',
    name: '',
    shortBio: '',
    bio: '',
    agency: '',
    debut: '',
    yearsActive: '',
    mostPopularMember: '',
    fandom: '',
    member: [
      {
        name: '',
        bio: '',
        picture: '',
        height: '',
        dateBirth: '',
        bloodType: '',
        position: ''
      }
    ],
    image: ''
  };
  comments = [];
  user = [];
  message = '';

  constructor(public router: Router, private params: ActivatedRoute, private service: KoreabooService, private storage: Storage) { }

  ngOnInit() {
    const id = this.params.snapshot.paramMap.get('id');
    this.service.getKpopId(id).subscribe(async response => {
      const res = await response.json();
      this.kpop = res;
      const user = await this.storage.get('isLoggedIn');
      if (user) {
        this.user = user;
      }
      this.getComment();
    });
  }

  goHomePop() {
    this.router.navigate(['/home-kpop']);
  }

  async getComment() {
    const comment = await this.storage.get(`${this.kpop.id}`);
    if (comment) {
      this.comments = JSON.parse(comment).comment;
    }
  }

  async sendComment() {
    let comment = await this.storage.get(`${this.kpop.id}`);
    if (comment) {
      const newComment = JSON.parse(comment);
      newComment.comment.push({
        name: this.user[0].nama,
        message: this.message
      });
      await this.storage.set(`${this.kpop.id}`, JSON.stringify(newComment));
      this.message = '';
      return this.getComment();
    }
    comment = {
      comment: [{
        name: this.user[0].nama,
        message: this.message
      }]
    };
    await this.storage.set(`${this.kpop.id}`, JSON.stringify(comment));
    this.message = '';
    return this.getComment();
  }

}
