import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/countries/country-list/country-card/country-card.component';
import { CountryListComponent } from './components/countries/country-list/country-list.component';
import { DropdownComponent } from './components/countries/dropdown/dropdown.component';
import { SearchComponent } from './components/countries/search/search.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    CountryDetailsComponent,
    SearchComponent,
    DropdownComponent,
    CountryCardComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
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
