import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-rating-circle',
  templateUrl: './rating-circle.component.html',
  styleUrls: ['./rating-circle.component.css'],
})
export class RatingCircleComponent implements AfterViewInit {
  @Input() percent: number = 1;
  @Input() size: number = 50;
  @ViewChild('canvasElement', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    setTimeout(() => this.drawCircle(), 0);
  }

  drawCircle() {
    if (!this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size dynamically
    canvas.width = this.size;
    canvas.height = this.size;

    const darkBackground = '#13181e';
    const trackColor = '#204529';
    const barColor = '#21d07a';
    const lineWidth = this.size * 0.08; // Adjust line thickness based on size
    const radius = this.size / 2 - lineWidth / 2;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + 2 * Math.PI * (this.percent / 100);

    ctx.clearRect(0, 0, this.size, this.size);

    // 🔹 Fill the entire circle with dark background
    ctx.beginPath();
    ctx.arc(
      this.size / 2,
      this.size / 2,
      radius + lineWidth / 2,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = darkBackground;
    ctx.fill();

    // 🔹 Draw background track
    ctx.beginPath();
    ctx.arc(this.size / 2, this.size / 2, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = trackColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    // 🔹 Draw progress arc
    ctx.beginPath();
    ctx.arc(this.size / 2, this.size / 2, radius, startAngle, endAngle);
    ctx.strokeStyle = barColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
  }
}
