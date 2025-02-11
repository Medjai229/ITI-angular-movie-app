import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-auth-nav',
  imports: [RouterModule],
  templateUrl: './authnav.html',
  styleUrl: './authnav.css',
})
export class authnavComponent implements OnInit {
  wishlistCount = 0;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.wishlistCount$.subscribe((count) => {
      this.wishlistCount = count; // Updates wishlist count in navbar
    });
  }
}
