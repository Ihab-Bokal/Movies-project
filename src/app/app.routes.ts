import { Routes } from '@angular/router';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";

export const routes: Routes = [
  {
    path: 'list',
    component :MoviesListComponent,
    title : 'Movies list'
  },
  {
    path : 'detail/:id',
    component : MovieDetailsComponent,
    title : 'Movie detail'
  },
  {
    path:'**',
    redirectTo: 'list'
  }
];
