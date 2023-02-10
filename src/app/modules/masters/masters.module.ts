import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MasterManagementComponent } from './master-management/master-management.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { CityComponent } from './city/city.component';
import { CommonModuleModule } from '../common-module/common-module.module';
import { ParentModule } from '../parent/parent.module';


@NgModule({
  declarations: [
    MasterManagementComponent,
    CountryComponent,
    StateComponent,
    DistrictComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    ParentModule,
    AngularMaterialModule,
    CommonModuleModule
  ],
  exports: [
  ]
})
export class MastersModule { }
