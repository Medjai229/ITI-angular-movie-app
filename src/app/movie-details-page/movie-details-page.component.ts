import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-movie-details-page',
  imports: [],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.css'
})
export class MovieDetailsPageComponent {
  @Input() id : string = '';

  movie: any

  constructor(private RequestService: RequestService, private route: ActivatedRoute, private router : Router){}


  ngOnChange() {
    console.log(this.route.snapshot.params["id"])
  }


  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)

    this.RequestService.getMovieDetails(this.id).subscribe((res)=> {
      this.movie = res

      console.log(this.movie)

    })

  }
}
