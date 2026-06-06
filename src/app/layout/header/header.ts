import { Component, inject, signal, HostListener, computed } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';
import type { Language } from '../../core/i18n/portfolio.i18n';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);
  protected readonly navIds = PORTFOLIO_STATIC.navIds;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly navItems = computed(() => {
    const t = this.languageService.t();
    return this.navIds.map((id) => ({ id, label: t.nav[id] }));
  });

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  scrollTo(sectionId: string): void {
    this.menuOpen.set(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  setLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
  }
}
