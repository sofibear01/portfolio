import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Renders a single-colour SVG from /public/icons as a CSS mask, so it inherits currentColor.
 * UI glyphs come from Phosphor (regular), tech logos from Devicon (plain).
 */
@Component({
  selector: 'app-icon',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[style.--icon-url]': 'url()',
  },
  styles: `
    :host {
      display: inline-block;
      flex: none;
      width: 1em;
      height: 1em;
      background-color: currentColor;
      mask: var(--icon-url) center / contain no-repeat;
      -webkit-mask: var(--icon-url) center / contain no-repeat;
    }
  `,
})
export class Icon {
  readonly name = input.required<string>();
  readonly set = input<'ui' | 'tech'>('ui');

  protected readonly url = computed(() => `url("icons/${this.set()}/${this.name()}.svg")`);
}
