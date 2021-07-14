import { Component, OnInit } from '@angular/core';
import { Countries, CountriesProviderService, Country } from '../../services/countries-provider.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: Countries;
  fullSetCountries: Countries;

  constructor(private countriesProvider: CountriesProviderService) {
  }

  ngOnInit(): void {
    this.fetchAllCountries();
  }

  queryList(query: string): void {
    this.countries = this.fullSetCountries.filter((country: Country) => country.name.includes(query));
  }

  getCountriesByRegion(query: string): void {
    query ? this.countriesProvider.getRegion(query).subscribe(this.updateCountryLists) :
      this.fetchAllCountries();
  }

  updateCountryLists = (countries: Countries): void => {
    //arrow function to solve the problem with 'this' in subscribe!!!
    this.fullSetCountries = countries;
    this.countries = countries;
  };

  fetchAllCountries(): void {
    this.countriesProvider.getCountries().subscribe(this.updateCountryLists);
  }
}