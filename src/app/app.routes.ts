import { Routes } from '@angular/router';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieWishlistPageComponent } from './movie-wishlist-page/movie-wishlist-page.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
  {
    path: '',

    component: MovieListPageComponent,

    title: 'Home',
  },

  {
    path: 'search',
    component: SearchPageComponent,
    title: 'Search',
  },

  {
    path: 'wishist',

    component: MovieWishlistPageComponent,

    title: 'Wishlist',
  },

  {
    path: 'movie/:id',

    component: MovieDetailsPageComponent,

    title: 'Details',
  },
];
