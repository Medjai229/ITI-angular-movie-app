import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null || value < 0) return 'No Rating';

    const ratingOutOfFive = (value / 10) * 5;

    const fullStars = Math.floor(ratingOutOfFive);

    const hasHalfStar = (ratingOutOfFive - fullStars) >= 0.5;

    let stars = '⭐'.repeat(fullStars);

    if (hasHalfStar) {
      stars += '⭐️';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    stars += '✰'.repeat(emptyStars);

    return stars;
  }

}
