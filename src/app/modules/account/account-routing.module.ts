import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOpeningComponent } from './account-opening/account-opening.component';
import { CollateralLinkingComponent } from './collateral-linking/collateral-linking.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },  
  {
    path: 'account', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'account-opening', component: AccountOpeningComponent
  },
  {
    path: 'collateral-linking', component: CollateralLinkingComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
