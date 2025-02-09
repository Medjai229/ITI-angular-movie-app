import { Component } from '@angular/core';
import { RequestService } from '../service/request.service';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, MovieCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  searchQuery: string = '';
  searchedQuery: string = '';
  searchResults: any = [];
  constructor(private requestService: RequestService) {}

  search() {
    this.searchedQuery = this.searchQuery;

    this.requestService
      .getSearchResults(this.searchQuery)
      .subscribe((res: any) => (this.searchResults = res.results));
  }
}
