import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {


  // Array for Report List
  reportList: { name: string; customClass: string, content: string }[] = [
    { name: 'Loans Disbursed', customClass: 'LoansDisbursed', content: '₹ 235688.00' },
    { name: 'Total Deposits', customClass: 'TotalDeposits', content: '₹ 00.00' },
    { name: 'Total Interest Received', customClass: 'TotalInterestReceived', content: '₹495688.00' },
    { name: 'Total Interest Paid', customClass: 'TotalInterestPaid', content: '₹ 00.00' },
    { name: 'Cash At Branch', customClass: 'CashAtBranch', content: '₹ 235688.00' },
    { name: 'Net Profit', customClass: 'NetProfit', content: '₹ 23562388.00' },
    { name: 'Loan Diagnostics', customClass: 'LoanDiagnostics', content: '3' },
    { name: 'Loan Due', customClass: 'LoanDue', content: '9' },
  ];

  //Array for management list

  managementList: { name: string; customDesign: string, logo: string, redirectLink: string, customColor: string }[] = [
    {
      name: 'Masters', customDesign: 'MastersManagement', logo: 'assets/images/icon.png', redirectLink: '/pages/master/master-management', customColor: '#910100'
    },
    { name: 'Customer ', customDesign: 'CustomerManagement', logo: 'assets/images/icon2.png', redirectLink: '/pages/customer', customColor: '#0D9F48' },
    { name: 'Account ', customDesign: 'AccountManagement', logo: 'assets/images/icon3.png', redirectLink: 'pages/account/account-opening', customColor: '#11B3E7' },
    { name: 'Transitions', customDesign: 'TransitionsManagement', logo: 'assets/images/icon4.png', redirectLink: '#', customColor: '#EC6100' }

  ]

  //Array for management card
  managementCard: { name: string; cardDesign: string, logo: string, redirectLink: string, customColor: string, bgImage: string }[] = [
    { name: 'Report ', cardDesign: 'ReportManagement', logo: 'assets/images/cardlogo.png', redirectLink: '#', customColor: '#7355ED', bgImage: 'assets/images/Rectangle_Blue.png' },
    { name: 'Gold Receipt Copy  ', cardDesign: 'GoldReceiptManagement', logo: 'assets/images/cardlogo2.png', redirectLink: '#', customColor: '#B1840E', bgImage: 'assets/images/Rectangle_Golden.png' }
  ]


}
