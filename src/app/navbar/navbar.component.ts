import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesListComponent} from "../movies-list/movies-list.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  moviesList: MoviesListComponent = new MoviesListComponent();
}
