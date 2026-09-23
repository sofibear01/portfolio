import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage, Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly language = inject(LanguageService);

  protected readonly projects = computed(() => {
    const items = this.language.t().projects.items;
    return PORTFOLIO_STATIC.projects
      .filter((project) => !project.hidden)
      .map((project) => ({ ...project, ...items[project.id] }));
  });
}
