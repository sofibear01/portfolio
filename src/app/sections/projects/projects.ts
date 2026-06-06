import { Component, inject, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule, MatIconModule, SectionHeading],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly languageService = inject(LanguageService);

  protected readonly projects = computed(() => {
    const items = this.languageService.t().projects.items;
    return PORTFOLIO_STATIC.projects.map((project) => ({
      ...project,
      title: items[project.id].title,
      description: items[project.id].description,
    }));
  });
}
