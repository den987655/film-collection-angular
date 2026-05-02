import { Component, computed, signal } from '@angular/core';
import { inject } from '@angular/core';
import { FilmCardComponent } from '../../components/film-card/film-card.component';
import { films } from '../../data/films';
import { Autofocus } from '../../directives/autofocus';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  imports: [FilmCardComponent, Autofocus],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
})
export class FilmListComponent {
  filmService = inject(FilmService);
  protected readonly films = this.filmService.getAll();
  search = signal('');

  protected onToggleFavorite(id: number) {
    this.filmService.toggleFavorite(id);
  }

  filteredFilms = computed(() => {
    return this.films().filter((f) => f.title.toLowerCase().includes(this.search().toLowerCase()));
  });
}
