import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OTPComponent } from '../../shared/otp/otp.component';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {

  customDetailsForm = new FormGroup({
    mobileNumber: new FormControl('')
  });

  constructor(private modalService: NgbModal) {
  }

  openOtpModal() {

  }
}
