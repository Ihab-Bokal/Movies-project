import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MovieService} from "./movie_service/movie.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MovieService, HttpClient]
})

export class AppComponent {
  title = 'Movies';
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e00128444fea107a774c8d460e7db626';
  private API_TOKEN = "e00128444fea107a774c8d460e7db626";
  private apiUrl1 = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getMovieById(id:number): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr')
  }

  getMovies() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageUrl(poster_path: string){
    return 'https://image.tmdb.org/t/p/w500' + poster_path
  }



  // postClient(clt:User): Observable<boolean> {
  //   return this.http.post<boolean>(`${this.apiUrl1}/user/saveUser`, clt);
  // }
  //
  // getClient():Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl1}/user/getUser`);
  // }
}
