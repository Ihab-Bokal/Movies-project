import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
  {
    path: 'list',
    component: MoviesListComponent,
    data: { title: 'Movies list' } // Set data for the route if needed
  },
  {
    path: 'detail/:id',
    component: MovieDetailsComponent,
    data: { title: 'Movie detail' } // Set data for the route if needed
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
