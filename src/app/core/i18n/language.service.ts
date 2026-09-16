import { DOCUMENT, Injectable, afterNextRender, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PORTFOLIO_I18N, type Language, type PortfolioTranslations } from './portfolio.i18n';

const STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  // Prerendered HTML is always Spanish; the stored preference is applied after hydration.
  private readonly currentLang = signal<Language>('es');
  private hydrated = false;

  readonly lang = this.currentLang.asReadonly();
  readonly t = computed<PortfolioTranslations>(() => PORTFOLIO_I18N[this.currentLang()]);

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      const { meta } = PORTFOLIO_I18N[lang];
      this.document.documentElement.lang = lang;
      this.title.setTitle(meta.title);
      this.meta.updateTag({ name: 'description', content: meta.description });
      if (this.hydrated) {
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch {
          // Storage can be unavailable (private mode); the choice just won't persist.
        }
      }
    });

    afterNextRender(() => {
      this.hydrated = true;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'es' || stored === 'en') {
          this.currentLang.set(stored);
        }
      } catch {
        // Ignore unavailable storage.
      }
    });
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
  }
}
