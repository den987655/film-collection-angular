import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import type { Film } from '../../data/films';
import { output } from '@angular/core';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  film = input.required<Film>();
  favoriteClicked = output<number>();
  router = inject(Router);

   onFavoriteClick() {
    this.favoriteClicked.emit(this.film().id)
  }

  protected goToDetails() {
    this.router.navigate(['film', this.film().id]);
  }
}
