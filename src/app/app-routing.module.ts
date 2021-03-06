import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':name',
    component: CountryDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
