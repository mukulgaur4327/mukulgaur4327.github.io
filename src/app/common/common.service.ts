import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }

  mastersMgmtData() {
    let data = [
      { img: null, img2: null, ptagValue: "Customer Details" },
      { img: "assets/images/prefix-name.png", img2: "assets/images/prefix-name2.png", ptagValue: "Prefix of Name" },
      { img: "assets/images/customer-type.png", img2: "assets/images/customer-type2.png", ptagValue: "Customer Type" },
      { img: "assets/images/occupation.png", img2: "assets/images/occupation2.png", ptagValue: "Occupation" },
      { img: "assets/images/caste.png", img2: "assets/images/caste2.png", ptagValue: "Caste" },
      { img: "assets/images/relationship.png", img2: "assets/images/relationship2.png", ptagValue: "Relationship" },
      { img: null, img2: null, ptagValue: "Address" },
      { img: "assets/images/country.png", img2: "assets/images/country2.png", ptagValue: "Country" },
      { img: "assets/images/state.png", img2: "assets/images/state2.png", ptagValue: "State" },
      { img: "assets/images/district.png", img2: "assets/images/district2.png", ptagValue: "District" },
      { img: "assets/images/taluka.png", img2: "assets/images/taluka2.png", ptagValue: "Taluka" },
      { img: "assets/images/city.png", img2: "assets/images/city2.png", ptagValue: "City" },
      { img: "assets/images/area.png", img2: "assets/images/area2.png", ptagValue: "Area" },
    ]

    return data;
  }

  customerMgmtData() {
    let data = [
      { img: 'assets/images/customer-list.png', img2: 'assets/images/customer-list2.png', ptagValue: 'Customer List' },
      { img: 'assets/images/document.png', img2: 'assets/images/document2.png', ptagValue: 'Document' },
      { img: 'assets/images/photos-signs.png', img2: 'assets/images/photos-signs2.png', ptagValue: 'Photos & Signs' },
      { img: 'assets/images/status.png', img2: 'assets/images/status2.png', ptagValue: 'Status' },
      { img: 'assets/images/bank-account-mgmt.png', img2: 'assets/images/bank-account-mgmt2.png', ptagValue: 'Bank Account Management' },
    ];
    return data;
  }

  accountMgmtData() {
    let data = [
      { img: 'assets/images/account-opening.png', img2: 'assets/images/account-opening2.png', ptagValue: 'Account Opening' },
      { img: 'assets/images/account-maintenance.png', img2: 'assets/images/account-maintenance2.png', ptagValue: 'Account Maintenance' },
      { img: 'assets/images/collateral-linking.png', img2: 'assets/images/collateral-linking2.png', ptagValue: 'Collateral Linking' },
      { img: 'assets/images/gold-add.png', img2: 'assets/images/gold-add2.png', ptagValue: 'Gold Add & Release' },
      { img: 'assets/images/account-IR.png', img2: 'assets/images/account-IR2.png', ptagValue: 'Account Interest Rate Maintenance' },
    ]
    return data;
  }

  transitionsMgmtData() {
    let data = [
      { img: 'assets/images/disbursement.png', img2: 'assets/images/disbursement2.png', ptagValue: 'Disbursement' },
      { img: 'assets/images/installment-payment.png', img2: 'assets/images/installment-payment2.png', ptagValue: 'Installment Payment' },
      { img: 'assets/images/loan-acc-closure.png', img2: 'assets/images/loan-acc-closure2.png', ptagValue: 'Loan Account Closure' },
      { img: 'assets/images/gl-receipt.png', img2: 'assets/images/gl-receipt2.png', ptagValue: 'GL Receipt & Payment' },
      { img: 'assets/images/trans-enquiry.png', img2: 'assets/images/trans-enquiry2.png', ptagValue: 'Transaction Enquiry' },
    ]
    return data;
  }

  onEdit(element:any, url?:any){
    console.log(element);
    
  }

  onDelete(element:any){
    console.log(element);
  }


}
