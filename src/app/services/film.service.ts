import { computed, Injectable, signal } from '@angular/core';
import { type Film, films } from '../data/films';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsSignal = signal<Film[]>(films);

  getAll() {
    return this.filmsSignal;
  }
  getById(id: number) {
    return this.filmsSignal().find((f) => f.id === id);
  }

  toggleFavorite(id: number) {
    this.filmsSignal.update((films) =>
      films.map((film) => {
        if (film.id === id) {
          return { ...film, isFavorite: !film.isFavorite };
        }
        return film;
      }),
    );
  }

  favorites = computed(() => {
   return this.filmsSignal().filter(f => f.isFavorite);
  });
}
