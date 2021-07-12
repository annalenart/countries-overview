import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (themeService: ThemeService) => () => themeService.initTheme(),
    deps: [ThemeService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
