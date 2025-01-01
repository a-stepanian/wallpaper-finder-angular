import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Wallpaper Finder | Home',
  },
  {
    path: 'search',
    component: BrowseComponent,
    title: 'Wallpaper Finder | Browse Wallpapers',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Wallpaper Finder | About',
  },
];
