import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { authnavComponent } from '../auth.nav/authnav.component';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, authnavComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
