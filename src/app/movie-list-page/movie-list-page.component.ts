import { RequestService } from './../movie-wishlist-page/services/request.service';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list-page',
  imports: [MovieCardComponent],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.css',
})
export class MovieListPageComponent {
  movies: any[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    console.log('Fetching movies in parent...');
    this.requestService.getFilmsHome().subscribe((res: any) => {
      console.log('Movies received:', res.results);
      this.movies = res.results;
    });
  }
}
