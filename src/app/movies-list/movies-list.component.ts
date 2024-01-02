import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie} from "../model/movie";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MovieService} from "../movie_service/movie.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

/*   This component fetches and displays the data from TMDB's API.  */

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, HttpClientModule, RouterLink],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  providers: [MovieService]
})
/* ------ PROVIDERS 101 ------
Providers are usually singleton (one instance) objects, that other objects have access to through dependency injection (DI).

If you plan to use an object multiple times, for example, the Http service in different components, you can ask for the
same instance of that service (reuse it). You do that with the help of DI by providing a reference to the same object
that DI creates for you.

@Component){
  ..
  providers: [Http]
}
..instead of creating new object every time:

@Component){}
class Cmp {
  constructor() {
    // this is pseudo code, doens't work
    this.http = new Http(...options);
  }
}
This is an approximation, but that's the general idea behind Dependency Injection - let the framework handle creation
and maintenance of reusable objects... Provider is Angular's term for these reusable objects (dependencies).
*/

export class MoviesListComponent {
  private movieService: MovieService = inject(MovieService);
  moviesList !: Movie[];
  moviesFilteredList !: Movie[];

  constructor() {
    this.movieService.getPopularMovies().subscribe((response =>{
      this.moviesList = response.results
      this.moviesFilteredList = this.moviesList;
    }))
  }

  public getMovieservice() : MovieService {
    return this.movieService;
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
