import { Component } from '@angular/core';

export interface PeriodicElement {
  goldDescription: string; 
  items: string;
  grossWeight: string;
  netWeight:any;
  pergramRate:any;
  appraisalAmount:any;
  lendableAmount:any;
  image:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {goldDescription: 'Bangal', items: '2', grossWeight: '600', netWeight: '500', pergramRate:'100', appraisalAmount:'50000.00' , lendableAmount:'50000.00',image:'', Action:'' },

];

@Component({
  selector: 'app-collateral-linking',
  templateUrl: './collateral-linking.component.html',
  styleUrls: ['./collateral-linking.component.css']
})
export class CollateralLinkingComponent {

  displayedColumns: string[] = ['goldDescription','items','grossWeight','netWeight','pergramRate','appraisalAmount','lendableAmount','image','Action'];
  dataSource1 = ELEMENT_DATA;
}
