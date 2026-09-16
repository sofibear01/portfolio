import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly language = inject(LanguageService);
  protected readonly static = PORTFOLIO_STATIC;
}
