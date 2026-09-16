import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from './core/i18n/language.service';
import { Header } from './layout/header/header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Education, Skills, Projects, Contact],
  template: `
    <a class="skip-link" href="#main">{{ language.t().skipLink }}</a>
    <app-header />
    <main id="main" tabindex="-1">
      <span id="top"></span>
      <app-hero />
      <app-about />
      <app-experience />
      <app-education />
      <app-skills />
      <app-projects />
    </main>
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly language = inject(LanguageService);
}
