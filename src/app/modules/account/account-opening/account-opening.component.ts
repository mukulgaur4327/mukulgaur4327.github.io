import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

// export interface PeriodicElement {
//   CustID: number;
//   CustomerName: string;
//   Relationship: any;
//   Action: any;
// }

// export interface PeriodicElements {
//   CustID: number;
//   NomineeName: any;
//   Dob: any;
//   Relationship: any;
//   Action: any;
// }

// // for customer details
// const ELEMENT_DATA: PeriodicElement[] = [
//   { CustID: 100010001, CustomerName: 'Hemant ', Relationship: 'Single Ownership', Action: '' },

// ];

// for nominee details
// const ELEMENT_DATA2: PeriodicElements[] = [
//   { CustID: 100010001, NomineeName: 'Atul Agarwal', Dob: '10/12/1998', Relationship: 'Brother', Action: '' },

// ];


@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.css']
})
export class AccountOpeningComponent implements OnInit {

  selected: any = ''
  toDate: any = new Date()


  // displayedColumns: string[] = ['CustID', 'CustomerName', 'Relationship', 'Action'];
  // dataSource1 = ELEMENT_DATA;

  // displayedColumns2: string[] = ['CustID', 'NomineeName', 'Dob', 'Relationship', 'Action'];
  // dataSource2 = ELEMENT_DATA2;
  fromDate: any = new Date();

  constructor() { }

  ngOnInit(): void {

  }

}
