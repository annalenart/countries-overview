import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static THEME_LIGHT = 'theme-light';
  private static THEME_DARK = 'theme-dark';
  private static STORAGE_KEY = 'theme';

  private currentTheme: string;

  constructor() {
  }

  initTheme(): void {
    const startTheme = localStorage.getItem(ThemeService.STORAGE_KEY) || ThemeService.THEME_LIGHT;
    this.updateTheme(startTheme);
  }

  updateTheme(theme: string): void {
    document.body.className = theme;
    this.currentTheme = theme;
    localStorage.setItem(ThemeService.STORAGE_KEY, theme);
  }

  toggleTheme(): void {
    if (this.currentTheme === ThemeService.THEME_LIGHT) {
      this.updateTheme(ThemeService.THEME_DARK);
    } else {
      this.updateTheme(ThemeService.THEME_LIGHT);
    }
  }

}
