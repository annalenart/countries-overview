import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  farMoon = farMoon;
  fasMoon = fasMoon;
  isLightTheme: boolean;

  constructor(public themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.isLightTheme = this.themeService.isLightTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isLightTheme = this.themeService.isLightTheme();
  }
}
