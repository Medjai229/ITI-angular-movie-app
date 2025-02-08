import { Routes } from '@angular/router';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';

export const routes: Routes = [
  {
    path: "movie/:id",
    component: MovieDetailsPageComponent,
    title: "Movie"
  }

];
