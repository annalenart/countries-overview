import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() queryChanged = new EventEmitter<string>();
  faSearch = faSearch;

  private _searchQuery: string;

  get searchQuery(): string {return this._searchQuery}
  set searchQuery(query: string) {
    this._searchQuery = query;
    this.queryChanged.emit(query);
  }

}
