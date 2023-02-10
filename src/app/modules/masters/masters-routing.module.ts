import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterManagementComponent } from './master-management/master-management.component';
import { CountryComponent } from './country/country.component'
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: "master-management", component: MasterManagementComponent },
  { path: "country", component: CountryComponent },
  { path: "state", component: StateComponent },
  { path: "district", component: DistrictComponent },
  { path: "city", component: CityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
