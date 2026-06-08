import { Component, inject, computed } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly languageService = inject(LanguageService);
  protected readonly skills = PORTFOLIO_STATIC.skills;

  protected readonly categories = computed(() => {
    const categories = this.languageService.t().skills.categories;
    const grouped = new Map<string, typeof PORTFOLIO_STATIC.skills>();

    for (const skill of PORTFOLIO_STATIC.skills) {
      const label = categories[skill.categoryKey];
      const list = grouped.get(label) ?? [];
      list.push(skill);
      grouped.set(label, list);
    }

    return Array.from(grouped.entries());
  });
}
