import { Routes } from '@angular/router';
const ParentRoutingModule: Routes = [
  {
    path: "pages/customer",
    loadChildren: () =>
      import("../customer/customer.module").then(
        (m) => m.CustomerModule
      )
  },
  {
    path: "pages/reports",
    loadChildren: () =>
      import("../reports/reports.module").then(
        (m) => m.ReportsModule
      )
  },
  {
    path: "pages/transitions",
    loadChildren: () =>
      import("../transitions/transitions.module").then(
        (m) => m.TransitionsModule
      )
  },
  {
    path: "pages/goldreceipt",
    loadChildren: () =>
      import("../gold-receipt/gold-receipt.module").then(
        (m) => m.GoldReceiptModule
      )
  },
  {
    path: 'pages/parent',
    loadChildren: () =>
      import("../parent/parent.module").then(
        (m) => m.ParentModule
      )
  },
  {
    path: 'pages/master',
    loadChildren: () =>
      import("../masters/masters.module").then(
        (m) => m.MastersModule
      )
  },

  {
    path: '',
    redirectTo: '/pages/customer',
    pathMatch: 'full',
  }
];

export { ParentRoutingModule };
