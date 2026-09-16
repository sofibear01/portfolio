import { DOCUMENT, Injectable, afterNextRender, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

/**
 * The initial theme is applied by an inline script in index.html before first paint,
 * so this service only mirrors it and handles manual changes.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly mode = signal<ThemeMode>('light');

  readonly theme = this.mode.asReadonly();
  readonly isDark = computed(() => this.mode() === 'dark');

  constructor() {
    afterNextRender(() => {
      const current = this.document.documentElement.dataset['theme'];
      this.mode.set(current === 'dark' ? 'dark' : 'light');
    });
  }

  toggle(): void {
    const next: ThemeMode = this.mode() === 'dark' ? 'light' : 'dark';
    this.mode.set(next);
    this.document.documentElement.dataset['theme'] = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore unavailable storage.
    }
  }
}
