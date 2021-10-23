import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

export interface CountryDetails extends Country {
  nativeName: string;
  subregion: string;
  topLevelDomain: Array<string>;
  currencies: Array<CountryName>;
  languages: Array<CountryName>;
  borders: Array<string>;
}

export type CountryName = Pick<Country, 'name'>;


export type Countries = Array<Country>

@Injectable({
  providedIn: 'root'
})
export class CountriesProviderService {

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>('https://restcountries.com/v2/all?fields=flag,name,population,region,capital');
  }

  getByRegion(region: string): Observable<Countries> {
    return this.http.get<Countries>(`https://restcountries.com/v2/region/${region}`);
  }

  getCountryDetails(name: string): Observable<CountryDetails> {
    return this.http.get<Array<CountryDetails>>(
      `https://restcountries.com/v2/name/${name}?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`)
      .pipe(map((arrCountryDetails: Array<CountryDetails>) => arrCountryDetails[0]), delay(500)); //  delay for test purposes
  }

  getCountryNameByCode(code: string): Observable<CountryName> {
    return this.http.get<CountryName>(`https://restcountries.com/v2/alpha/${code}?fields=name`);
  }
}
