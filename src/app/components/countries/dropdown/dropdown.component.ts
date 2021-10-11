import { Component, EventEmitter, Output } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Output() selectChanged = new EventEmitter<string>();

  faFilter = faFilter;

  regions: Array<any> = [
    {name: '', displayName: 'All'},
    {name: 'africa', displayName: 'Africa'},
    {name: 'americas', displayName: 'America'},
    {name: 'asia', displayName: 'Asia'},
    {name: 'europe', displayName: 'Europe'},
    {name: 'oceania', displayName: 'Oceania'},
  ]

  private _pickedQuery = 'Filter by Region';

  get pickedQuery(): string {
    return this._pickedQuery
  }

  set pickedQuery(query: string) {
    this._pickedQuery = query;
    this.selectChanged.emit(query);
  }
}
