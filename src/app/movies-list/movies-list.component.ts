import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie} from "../model/movie";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MovieService} from "../movie_service/movie.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  providers: [MovieService]
})

export class MoviesListComponent {
  public movieService: MovieService = inject(MovieService);
  moviesList !: Movie[];
  moviesFilteredList !: Movie[];

  constructor(){
    this.movieService.getPopularMovies().subscribe((response =>{
      this.moviesList = response.results
      this.moviesFilteredList = this.moviesList;
    }))
  }

  filterMovies(text:string){
    if(!text){
      this.moviesFilteredList = this.moviesList;
      return;
    }
    this.moviesFilteredList =
      this.moviesList.filter(
        movie => movie?.title.toLowerCase().includes(text.toLowerCase())
      );
  }
}
