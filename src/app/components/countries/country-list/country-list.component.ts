import { Component, Input } from '@angular/core';
import { Countries } from '../../../services/countries-provider.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  @Input() countries: Countries;
}
