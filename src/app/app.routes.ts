import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { FilmListComponent } from './pages/film-list/film-list.component';

export const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
