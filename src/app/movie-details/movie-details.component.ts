import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from "../movie_service/movie.service";
import { Movie } from "../model/movie";
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* This component is going to define the card that'll contain all the data about each movie */

@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule],
  templateUrl: "./movie-details.component.html",
  styleUrl: './movie-details.component.scss',
  providers : [MovieService]
})

export class MovieDetailsComponent implements OnInit {
  movie : Observable<Movie | undefined>;
  private apiUrl1 = 'http://localhost:8080';
  is_favorite: boolean= false;

  constructor( private route: ActivatedRoute, public movieService: MovieService, private http: HttpClient) {
    const filmId = this.route.snapshot.params['id'];
    this.movie  = this.movieService.getPopularMoviesById(filmId);
  }

  public makeFavorite(): boolean {
    console.log(true)
    return this.is_favorite = true
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const filmId = params['id'];
      this.movie = this.movieService.getPopularMoviesById(filmId);
    });
  }

  comments: string[] = [];
  newComment: string = '';

  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = '';
      // Add code to POST to backend
    }
  }

  getComment(id_film:number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl1}/Commentaire/commentaires?id=${id_film}`);
  }

  postComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl1}/comment/postComment`, comment);
  }
}
