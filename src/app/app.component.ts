import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'land-page-ser-amor';
}
