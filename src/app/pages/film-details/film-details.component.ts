import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DurationPipe } from '../../pipes/duration-pipe';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  route = inject(ActivatedRoute);
  filmService = inject(FilmService);

  id = Number(this.route.snapshot.paramMap.get('id'));
  film = this.filmService.getById(this.id);
}
