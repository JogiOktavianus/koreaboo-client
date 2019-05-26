import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'home-kmovie', loadChildren: './home-kmovie/home-kmovie.module#HomeKmoviePageModule' },
  { path: 'home-kpop', loadChildren: './home-kpop/home-kpop.module#HomeKpopPageModule' },
  { path: 'home-vshow', loadChildren: './home-vshow/home-vshow.module#HomeVshowPageModule' },
  { path: 'kdrama/:id', loadChildren: './kdrama/kdrama.module#KdramaPageModule' },
  { path: 'kmovie/:id', loadChildren: './kmovie/kmovie.module#KmoviePageModule' },
  { path: 'kpop/:id', loadChildren: './kpop/kpop.module#KpopPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'vshow/:id', loadChildren: './vshow/vshow.module#VshowPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
