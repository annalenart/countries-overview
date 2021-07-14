import { Component, Input } from '@angular/core';
import { Country } from '../../../../services/countries-provider.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country: Country;
}
