import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details-page',
  imports: [DatePipe],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.css'
})
export class MovieDetailsPageComponent {
  @Input() id : string = '';

  movie: any

  constructor(private RequestService: RequestService, private route: ActivatedRoute, private router : Router, private titleService: Title){}



  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }


  getLogo(movie: any) {
    return `https://image.tmdb.org/t/p/w200/${movie.production_companies[0].logo_path}`;
  }




  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)

    this.RequestService.getMovieDetails(this.id).subscribe((res)=> {
      this.movie = res
      
      this.setTitle(this.movie.title)

      console.log(this.movie)
    })

    if (this.movie) {
      this.setTitle(this.movie.title);
    }
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  generateStars(rating: number): string[] {
    const stars = [];


    const ratingOutOfFive = (rating / 10) * 5;

    const fullStars = Math.floor(ratingOutOfFive);
    const halfStar = (ratingOutOfFive - fullStars) >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);


    for (let i = 0; i < fullStars; i++) {
      stars.push('fa-solid fa-star');
    }

    if (halfStar) {
      stars.push('fa-solid fa-star-half-stroke');
    }


    for (let i = 0; i < emptyStars; i++) {
      stars.push('fa-regular fa-star');
    }

    return stars;
  }

}
