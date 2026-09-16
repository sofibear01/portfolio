import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly language = inject(LanguageService);

  protected readonly jobs = computed(() => {
    const t = this.language.t().experience;
    return PORTFOLIO_STATIC.experience.map((job) => ({ ...job, ...t.items[job.id] }));
  });
}
