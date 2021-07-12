import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static THEME_LIGHT = 'theme-light';
  private static THEME_DARK = 'theme-dark';
  private static STORAGE_KEY = 'theme';

  private _currentTheme: string;

  get currentTheme(): string {
    return this._currentTheme;
  }

  set currentTheme(theme: string) {
    this._currentTheme = theme;
    document.body.className = theme;
    localStorage.setItem(ThemeService.STORAGE_KEY, theme);
  }

  constructor() {
  }

  initTheme(): void {
    // const startTheme = localStorage.getItem(ThemeService.STORAGE_KEY) || ThemeService.THEME_LIGHT;
    // this.updateTheme(startTheme);
    this.currentTheme = localStorage.getItem(ThemeService.STORAGE_KEY) || ThemeService.THEME_LIGHT;
  }

  // updateTheme(theme: string): void {
  //   document.body.className = theme;
  //   this._currentTheme = theme;
  //   localStorage.setItem(ThemeService.STORAGE_KEY, theme);
  // }

  toggleTheme(): void {
    if (this._currentTheme === ThemeService.THEME_LIGHT) {
      this.currentTheme = ThemeService.THEME_DARK;
    } else {
      this.currentTheme = ThemeService.THEME_LIGHT;
    }
  }

  isLightTheme(): boolean {
    return this.currentTheme === ThemeService.THEME_LIGHT;
  }
}
