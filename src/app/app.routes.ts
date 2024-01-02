import { Routes } from '@angular/router';
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {DetailsMovieComponent} from "./movie-details/movie-details.component";

export const routes: Routes = [
  {
    path: 'list',
    component :MoviesListComponent,
    title : 'Movies list'
  },
  {
    path : 'detail/:id',
    component : DetailsMovieComponent,
    title : 'Movie detail'
  },
  {
    path:'**',
    redirectTo: 'list'
  }
];
