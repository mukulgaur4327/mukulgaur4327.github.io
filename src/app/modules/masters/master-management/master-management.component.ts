import { Component } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
@Component({
  selector: 'app-master-management',
  templateUrl: './master-management.component.html',
  styleUrls: ['./master-management.component.css']
})
export class MasterManagementComponent {
  mastersMgmt: any;
  checked: boolean = false
  displayColumns: any = [
    'position',
    'prefixName',
    'isActive',
    'Action',
  ];

  dS = [
    { position: 1, prefixName: 'Mr', checked: false },
    { position: 1, prefixName: 'Mrs', checked: false },
    { position: 1, prefixName: 'O', checked: false },
    { position: 1, prefixName: 'Kumar', checked: false },
  ]

  constructor(private service: CommonService) {
    this.mastersMgmt = this.service.mastersMgmtData();
  }

  edit(element: any) {

  }

  delete(element: any) { }

  onChange() {
    console.log('yyyyy')
  }
}

