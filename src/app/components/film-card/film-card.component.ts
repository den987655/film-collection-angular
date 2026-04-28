import { Component, input } from '@angular/core';
import type { Film } from '../../data/films';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  film = input<Film>();
}
