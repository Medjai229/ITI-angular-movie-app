import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { CommonModule, DatePipe } from '@angular/common';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-movie-wishlist-page',
  imports: [CommonModule, MovieCardComponent , RouterModule,DatePipe,RouterLink],
  templateUrl: './movie-wishlist-page.component.html',
  styleUrl: './movie-wishlist-page.component.css'
})
export class MovieWishlistPageComponent implements OnInit {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(movieId: number) {
    this.wishlistService.removeFromWishlist(movieId);
    this.wishlist = this.wishlistService.getWishlist();
  }
}
