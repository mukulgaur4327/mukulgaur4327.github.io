import { Component } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  edit:any;
  delete:any;
  overRideRate:any;
  isChecked:any;
  displayColumns: any = [
    'serialNo',
    'city',
    'isActive',
    'Action',
  ];

  dS=[
    {city:'Meerut', isActive:true },
    {city:'Jaipur', isActive:false },
]

constructor(private service:CommonService){
 this.edit = this.service.onEdit;
 this.delete = this.service.onDelete;
}
  onChange(event:any){
    console.log(event)
    // console.log(this.overRideRate);
    
  }
}
