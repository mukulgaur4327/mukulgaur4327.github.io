import { Component } from '@angular/core';
import {CommonService} from 'src/app/common/common.service'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  edit:any;
  delete:any;
  overRideRate:any;
  isChecked:any;
  displayColumns: any = [
    'serialNo',
    'state',
    'isActive',
    'Action',
  ];

  dS=[
    {state:'Noida', isActive:true },
    {state:'Bangalore', isActive:true },
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
