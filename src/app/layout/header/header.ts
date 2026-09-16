import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NAV_IDS, PORTFOLIO_STATIC } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import type { Language } from '../../core/i18n/portfolio.i18n';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { ThemeService } from '../../core/services/theme.service';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly spy = inject(ScrollSpyService);
  protected readonly static = PORTFOLIO_STATIC;
  protected readonly languages: Language[] = ['es', 'en'];
  protected readonly menuOpen = signal(false);

  protected readonly navItems = computed(() => {
    const nav = this.language.t().nav;
    return NAV_IDS.map((id) => ({ id, label: nav[id] }));
  });

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
