import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url: string = 'https://api.themoviedb.org/3/';
  api: string = '6a1cabb5e93fd6605356ead9aa9712dd';
  constructor(private http: HttpClient) {}

  getSearchResults(search: string, page: number): any {
    return this.http.get(
      `${this.url}search/movie?api_key=${this.api}&query=${search}&page=${page}`
    );
  }

  getHome() {
    return this.http.get(`${this.url}movie/now_playing?api_key=${this.api}`);
  }
}
