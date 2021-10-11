import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable, zip } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { CountriesProviderService, CountryDetails, CountryName } from '../../services/countries-provider.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  countryDetails$: Observable<CountryDetails>;
  borders$: Observable<Array<CountryName>>;

  constructor(private countriesProvider: CountriesProviderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.countryDetails$ = this.route.params.pipe(
      switchMap(({name}: Params) => {
        return this.countriesProvider.getCountryDetails(name);
      }),
      shareReplay(1)
    );

    this.borders$ = this.countryDetails$.pipe(
      switchMap(({borders}: CountryDetails) => {
        return zip(...borders.map((borderCountry: string) => this.countriesProvider.getCountryNameByCode(borderCountry)));
      })
    );
  }

}
