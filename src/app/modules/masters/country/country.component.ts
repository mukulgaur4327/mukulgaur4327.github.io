import { Component } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  edit: any;
  delete: any;
  overRideRate: any;
  isChecked: any;
  displayColumns: any = [
    'serialNo',
    'country',
    'isActive',
    'Action',
  ];

  dS = [
    { country: 'Bharat', isActive: true },
    { country: 'Singapore', isActive: true },
    { country: 'America', isActive: true },
    { country: 'China', isActive: true },
    { country: 'Japan', isActive: true },
  ]

  constructor(private service: CommonService) {
    this.edit = this.service.onEdit;
    this.delete = this.service.onDelete;
  }
  onChange(event: any) {
    console.log(event)
    // console.log(this.overRideRate);

  }


}
