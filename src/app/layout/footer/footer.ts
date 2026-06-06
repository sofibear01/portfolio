import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly languageService = inject(LanguageService);
  protected readonly static = PORTFOLIO_STATIC;
  protected readonly year = new Date().getFullYear();

  protected readonly socialLinks = computed(() => {
    const labels = this.languageService.t().social;
    return PORTFOLIO_STATIC.socialLinks.map((link) => ({
      ...link,
      label: labels[link.key],
    }));
  });
}
