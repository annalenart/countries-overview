import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable, zip } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { CountriesProviderService, CountryDetails, PropertyName } from '../../services/countries-provider.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  countryDetails$: Observable<CountryDetails>;
  borders$: Observable<Array<PropertyName>>;

  constructor(private countriesProvider: CountriesProviderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.countryDetails$ = this.route.params.pipe(
      switchMap((params: Params) => {
        const name = params['name'];
        return this.countriesProvider.getCountryDetails(name);
      }),
      shareReplay(1)
    );

    this.borders$ = this.countryDetails$.pipe(
      switchMap((country: CountryDetails) => {
        return zip(...country.borders.map((borderCountry: string) => this.countriesProvider.getCountryByCode(borderCountry)));
      })
    );
  }

}
