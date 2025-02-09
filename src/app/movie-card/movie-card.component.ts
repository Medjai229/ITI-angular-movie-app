import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RequestService } from '../movie-wishlist-page/services/request.service';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, DecimalPipe, NgClass, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
@Input() movie: any;
https: any;
image:string=""

  ngOnInit() {
    console.log(this.movie.poster_path);
    console.log(this.movie);
    this.image=`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`

  }

  
}
