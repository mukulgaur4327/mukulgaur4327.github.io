import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTPComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path:"otp", component:OTPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
