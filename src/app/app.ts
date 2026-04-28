import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    BreadcrumbsComponent,
    HeaderComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('film-collection');
}
