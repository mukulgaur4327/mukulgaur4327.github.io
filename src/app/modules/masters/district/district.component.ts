import { Component } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  edit:any;
  delete:any;
  overRideRate:any;
  isChecked:any;
  displayColumns: any = [
    'serialNo',
    'district',
    'isActive',
    'Action',
  ];

  dS=[
    {district:'Agra', isActive:true },
    {district:'Prayagraj', isActive:true },
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
