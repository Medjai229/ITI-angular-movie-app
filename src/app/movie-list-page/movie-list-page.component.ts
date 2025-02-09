import { RequestService } from './../movie-wishlist-page/services/request.service';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { PaginationService } from '../service/pagnation.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-movie-list-page',
  imports: [MovieCardComponent, PaginationComponent],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.css',
})
export class MovieListPageComponent {
  constructor(
    private requestService: RequestService,
    private _paginationService: PaginationService
  ) {}
  movies: any[] = [];
  totalPages: number = 0;
  currentPage: number = 1;

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies(page: number): void {
    this._paginationService.fetchPageData(page).subscribe((data) => {
      this.movies = data.results;
      this.totalPages = data.total_pages;
      this.currentPage = page;
    });
  }

  onPageChange(page: number): void {
    this.loadMovies(page);
  }
}
