import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string
}

export interface CountryDetails {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: Array<string>;
  currencies: Array<CountryName>;
  languages: Array<CountryName>;
  borders: Array<string>;
}

export interface CountryName {
  name: string
}

// export type CountryName2 = Pick<Country, 'name'>;

export type Countries = Array<Country>


@Injectable({
  providedIn: 'root'
})
export class CountriesProviderService {

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Countries> {

    return this.http.get<Countries>('https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital');
  }

  getRegion(region: string): Observable<Countries> {
    return this.http.get<Countries>(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  getCountryDetails(name: string): Observable<CountryDetails> {
    return this.http.get<Array<CountryDetails>>(
      `https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`)
      .pipe(map((arrCountryDetails: Array<CountryDetails>) => {
        const [countryDetails] = arrCountryDetails
        return countryDetails;
      }))
  }

  // getCountryByCode(code: string): Observable<CountryName> {
  // return
  // }
}
