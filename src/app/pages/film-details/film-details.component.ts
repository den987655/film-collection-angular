import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DurationPipe } from '../../pipes/duration-pipe';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);

  protected readonly id = Number(this.route.snapshot.paramMap.get('id'));
  protected readonly film = this.filmService.getById(this.id);

  protected goBack() {
    this.router.navigate(['/']);
  }
}
