import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import {MovieService} from "./movie_service/movie.service";
import {HttpClient} from "@angular/common/http";
import {DetailsMovieComponent} from "./movie-details/movie-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, MoviesListComponent, DetailsMovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MovieService, HttpClient]
})

export class AppComponent {
  title = 'Movies';
}
