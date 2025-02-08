import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, DecimalPipe, NgClass],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  movie: any = {
    adult: false,
    backdrop_path: '/kZyurQjTMLHalUxs7sHgH5XeiwO.jpg',
    belongs_to_collection: null,
    budget: 2500000,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10749,
        name: 'Romance',
      },
    ],
    homepage:
      'http://www.clubcultura.com/clubcine/clubcineastas/isabelcoixet/mividasinmi/index.htm',
    id: 20,
    imdb_id: 'tt0314412',
    origin_country: ['CA'],
    original_language: 'en',
    original_title: 'My Life Without Me',
    overview:
      'A fatally ill mother with only two months to live creates a list of things she wants to do before she dies without telling her family of her illness.',
    popularity: 16.357,
    poster_path: '/pFEtVPW88pWflYV84UFL0h1iJr3.jpg',
    production_companies: [
      {
        id: 49,
        logo_path: '/xpf5iHdvvBtsH8jBMlgIJHAET0c.png',
        name: 'El Deseo',
        origin_country: 'ES',
      },
      {
        id: 77,
        logo_path: null,
        name: 'Milestone Productions',
        origin_country: '',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'CA',
        name: 'Canada',
      },
      {
        iso_3166_1: 'ES',
        name: 'Spain',
      },
    ],
    release_date: '2003-03-07',
    revenue: 12300000,
    runtime: 106,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'What you are… is what you leave behind.',
    title: 'My Life Without Me',
    video: false,
    vote_average: 6.034,
    vote_count: 469,
  };

  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }
}
