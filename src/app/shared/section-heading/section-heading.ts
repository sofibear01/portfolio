import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  imports: [],
  template: `
    <div class="section-heading">
      <span class="section-heading__index">{{ index() }}</span>
      <h2 class="section-heading__title">{{ title() }}</h2>
      <span class="section-heading__line" aria-hidden="true"></span>
    </div>
    @if (subtitle()) {
      <p class="section-heading__subtitle">{{ subtitle() }}</p>
    }
  `,
  styles: `
    .section-heading {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }

    .section-heading__index {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--accent);
      font-weight: 500;
    }

    .section-heading__title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
      white-space: nowrap;
    }

    .section-heading__line {
      flex: 1;
      height: 1px;
      background: var(--border);
      min-width: 2rem;
    }

    .section-heading__subtitle {
      color: var(--text-secondary);
      margin: 0 0 2.5rem;
      max-width: 36rem;
      line-height: 1.6;
    }
  `,
})
export class SectionHeading {
  readonly index = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
