import { Component, inject } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { LanguageService } from '../../core/i18n/language.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education',
  imports: [SectionHeading, MatCardModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly languageService = inject(LanguageService);
}