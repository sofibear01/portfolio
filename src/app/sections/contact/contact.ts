import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly language = inject(LanguageService);
  protected readonly static = PORTFOLIO_STATIC;
  protected readonly year = new Date().getFullYear();
}
