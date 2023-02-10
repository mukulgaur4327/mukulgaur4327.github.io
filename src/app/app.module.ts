import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './modules/account/account.module';
import { CustomerModule } from './modules/customer/customer.module';
import { GoldReceiptModule } from './modules/gold-receipt/gold-receipt.module';
import { MastersModule } from './modules/masters/masters.module';
import { ReportsModule } from './modules/reports/reports.module';
import { TransitionsModule } from './modules/transitions/transitions.module';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ParentModule } from './modules/parent/parent.module';
// import { DashboardPageComponent } from './modules/parent/dashboard-page/dashboard-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,

    // DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccountModule,
    CustomerModule,
    GoldReceiptModule,
    MastersModule,
    ReportsModule,
    TransitionsModule,
    ParentModule,
    ReactiveFormsModule,
    NgbModule,

  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
