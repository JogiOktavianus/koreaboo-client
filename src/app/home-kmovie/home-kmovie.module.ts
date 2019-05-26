import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeKmoviePage } from './home-kmovie.page';

const routes: Routes = [
  {
    path: '',
    component: HomeKmoviePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeKmoviePage]
})
export class HomeKmoviePageModule {}
