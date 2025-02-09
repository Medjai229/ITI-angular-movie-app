import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
<<<<<<< HEAD
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RequestService } from '../movie-wishlist-page/services/request.service';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, DecimalPipe, NgClass, RouterLink],
=======
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, DecimalPipe, NgClass],
>>>>>>> e2be951dd4663fe7148c985f82b7182c02bbadc8
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
<<<<<<< HEAD
@Input() movie: any;
https: any;
image:string=""

  ngOnInit() {
    console.log(this.movie.poster_path);
    console.log(this.movie);
    this.image=`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
=======
  @Input() movie: any;
>>>>>>> e2be951dd4663fe7148c985f82b7182c02bbadc8

  }

<<<<<<< HEAD
  
=======
  handlePosterErr(e: Event) {
    const img: any = e.target;
    img.src = 'Image-not-found.png';
  }
>>>>>>> e2be951dd4663fe7148c985f82b7182c02bbadc8
}
