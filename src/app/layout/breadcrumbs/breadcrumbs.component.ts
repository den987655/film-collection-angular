import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);

  protected get url() {
    return this.router.url;
  }

  protected get currentFilmTitle() {
    const match = this.url.match(/^\/film\/(\d+)$/);
    if (!match) return '';

    const id = Number(match[1]);
    return this.filmService.getById(id)?.title ?? '';
  }
}
