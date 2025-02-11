import { Routes } from '@angular/router';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieWishlistPageComponent } from './movie-wishlist-page/movie-wishlist-page.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loginGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { authnavComponent } from './auth.nav/authnav.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',

    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [loginGuard],

    component: MovieListPageComponent,

    title: 'Home|Movie Best',
  },

  {
    path: 'search',
    component: SearchPageComponent,
    title: 'Search',
  },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Search',
  },

  {
    path: 'search/:search/:page',
    component: SearchPageComponent,
    title: 'Search',
  },

  {
    path: 'wishlist',

    component: MovieWishlistPageComponent,

    title: 'Wishlist',
  },

  {
    path: 'movie/:id',

    component: MovieDetailsPageComponent,

    title: 'Details',
  },

  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'regester',
    component: RegesterComponent,
    title: 'regester',
  },

  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
