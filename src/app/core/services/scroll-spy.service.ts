import { DOCUMENT, Injectable, afterNextRender, inject, signal } from '@angular/core';
import { NAV_IDS, type NavId } from '../data/portfolio.data';

/** Tracks which nav section is currently in the middle band of the viewport. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly document = inject(DOCUMENT);
  readonly active = signal<NavId | null>(null);

  constructor() {
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.active.set(entry.target.id as NavId);
            } else if (this.active() === entry.target.id) {
              this.active.set(null);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const id of NAV_IDS) {
        const section = this.document.getElementById(id);
        if (section) {
          observer.observe(section);
        }
      }
    });
  }
}
