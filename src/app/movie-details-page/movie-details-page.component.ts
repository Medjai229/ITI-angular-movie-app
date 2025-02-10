import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/request.service';
import { DatePipe, NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-movie-details-page',
  imports: [DatePipe, MovieCardComponent, NgClass],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.css'
})
export class MovieDetailsPageComponent {
  id: string = '';
  movie: any
  recommendations: any[] = []

  constructor(private RequestService: RequestService, private route: ActivatedRoute, private wishListService: WishlistService ,private titleService: Title){}


  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }


  getLogo(movie: any) {
    return `https://image.tmdb.org/t/p/w200/${movie.production_companies[0].logo_path}`;
  }


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.RequestService.getMovieDetails(this.id).subscribe((res) => {
        this.movie = res;
        this.setTitle(this.movie.title);
      });
    });

    //Recommentations

    this.RequestService.getRecommendations(this.id).subscribe((res) => {
      this.recommendations = res.results;
    });
  }


  //Handel page title

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  toggleWishList() {
    if (this.isWishListed()) {
      this.wishListService.removeFromWishlist(this.movie.id)
    }else {
      this.wishListService.addToWishlist(this.movie)
    }
  }

  isWishListed(): boolean {
    return this.wishListService.isInWishlist(this.movie.id);
  }

  // Handel Rating

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
