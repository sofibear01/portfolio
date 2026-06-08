import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [
    MatButtonModule,
    MatIconModule,
    SectionHeading,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly languageService = inject(LanguageService);
  protected readonly static = PORTFOLIO_STATIC;
}