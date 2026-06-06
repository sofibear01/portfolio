import { Component, inject, signal, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_STATIC } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    SectionHeading,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly languageService = inject(LanguageService);
  protected readonly static = PORTFOLIO_STATIC;
  protected readonly submitted = signal(false);

  protected readonly socialLinks = computed(() => {
    const labels = this.languageService.t().social;
    return PORTFOLIO_STATIC.socialLinks.map((link) => ({
      ...link,
      label: labels[link.key],
    }));
  });

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const t = this.languageService.t().contact;
    this.submitted.set(true);
    this.snackBar.open(t.successMessage, t.close, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    this.form.reset();
    this.submitted.set(false);
  }
}
