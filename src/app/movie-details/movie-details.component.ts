import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from "../movie_service/movie.service";
import { Movie } from "../model/movie";
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule],
  templateUrl: "./movie-details.component.html",
  styleUrl: './details-movie.component.css',
  providers : [MovieService]
})
export class DetailsMovieComponent {

  movie : Observable<Movie | undefined> ;


  constructor( private route: ActivatedRoute, public movieService: MovieService) {
    const filmId = this.route.snapshot.params['id'];
    this.movie  = this.movieService.getPopularMoviesById(filmId);
  }

  comments: string[] = [];
  newComment: string = '';

  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }
}
