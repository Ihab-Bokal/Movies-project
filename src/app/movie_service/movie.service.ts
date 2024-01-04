import { Injectable } from '@angular/core';
import { Movie } from "../model/movie";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }
  apikey = "e00128444fea107a774c8d460e7db626";

  getPopularMoviesById(id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}`;
    return this.http.get<any>(url);
  }

  getPopularMovies(): Observable<any> {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.apikey;
    return this.http.get<any>(url);
  }

  getMoviePoster(posterPath: string): string {
    return 'https://image.tmdb.org/t/p/w300' + posterPath;
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this.apikey;
    return this.http.get<Movie>(url);
  }

}
