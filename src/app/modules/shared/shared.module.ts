import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { OTPComponent } from './otp/otp.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    OTPComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
