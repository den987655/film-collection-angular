import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FilmCardComponent } from '../../components/film-card/film-card.component';
import { films } from '../../data/films';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  imports: [FilmCardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
})
export class FilmListComponent {
  filmService = inject(FilmService);
  protected readonly films = this.filmService.getAll();
}
