import { Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: MovieListPageComponent,
  },
];
