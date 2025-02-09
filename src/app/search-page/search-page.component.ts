import { Component } from '@angular/core';
import { RequestService } from '../service/request.service';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginationService } from '../service/pagnation.service';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, MovieCardComponent, PaginationComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  searchResults: any = [];
  totalPages: number = 0;
  currentPage: number = 1;
  constructor(private requestService: RequestService) {}

  loadMovies(page: number): void {
    this.requestService
      .getSearchResults(this.searchData, page)
      .subscribe((data: any) => {
        this.searchResults = data.results;
        this.totalPages = data.total_pages;
        this.currentPage = page;
      });
  }

  onPageChange(page: number): void {
    this.loadMovies(page);
  }

  searchData: string = '';
  searchedQuery: string = '';

  search() {
    this.loadMovies(this.currentPage);
    this.searchedQuery = this.searchData;

    this.requestService
      .getSearchResults(this.searchData, this.currentPage)
      .subscribe((res: any) => (this.searchResults = res.results));
  }
}
