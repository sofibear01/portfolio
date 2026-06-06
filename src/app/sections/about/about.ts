import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly languageService = inject(LanguageService);
}
