import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Marks an element to fade and rise into place the first time it enters the viewport.
 * The hidden start state only applies when <html> has the `motion-ok` class
 * (set in index.html when the visitor allows motion), so content is never hidden without JS.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class Reveal {
  readonly revealDelay = input(0);

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        element.classList.add('is-revealed');
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add('is-revealed');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
