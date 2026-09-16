import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PORTFOLIO_STATIC, type Skill } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-skills',
  imports: [Icon, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly language = inject(LanguageService);

  protected readonly groups = computed(() => {
    const labels = this.language.t().skills.categories;
    return PORTFOLIO_STATIC.skillCategories.map((key) => ({
      key,
      label: labels[key],
      skills: PORTFOLIO_STATIC.skills.filter((skill: Skill) => skill.categoryKey === key),
    }));
  });
}
