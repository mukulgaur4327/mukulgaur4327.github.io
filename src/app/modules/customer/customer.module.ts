import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ParentModule } from '../parent/parent.module';
import { MastersModule } from '../masters/masters.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerManagementComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AngularMaterialModule,
    ParentModule,
    MastersModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
