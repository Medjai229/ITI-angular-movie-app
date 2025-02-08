import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagnation.service';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-movie-list-page',
  imports: [PaginationComponent, CommonModule],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.css',
})
export class MovieListPageComponent {
  movies: any[] = [];
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(private _paginationService: PaginationService) {}

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
