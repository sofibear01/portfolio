import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly languageService = inject(LanguageService);
  protected readonly static = PORTFOLIO_STATIC;

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
