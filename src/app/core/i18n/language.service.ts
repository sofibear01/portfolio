import { Injectable, signal, computed, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_I18N, type Language, type PortfolioTranslations } from './portfolio.i18n';

const STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly currentLang = signal<Language>(this.getInitialLanguage());

  readonly lang = this.currentLang.asReadonly();
  readonly t = computed<PortfolioTranslations>(() => PORTFOLIO_I18N[this.currentLang()]);

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      const lang = this.currentLang();
      const translations = PORTFOLIO_I18N[lang];
      document.documentElement.lang = lang;
      document.title = translations.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', translations.meta.description);
      localStorage.setItem(STORAGE_KEY, lang);
    });
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
  }

  toggleLanguage(): void {
    this.currentLang.update((current) => (current === 'es' ? 'en' : 'es'));
  }

  private getInitialLanguage(): Language {
    if (!isPlatformBrowser(this.platformId)) {
      return 'es';
    }

    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === 'es' || stored === 'en') {
      return stored;
    }

    return 'es';
  }
}
