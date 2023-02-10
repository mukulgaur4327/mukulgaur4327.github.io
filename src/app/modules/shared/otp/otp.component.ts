import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})

export class OTPComponent {
  @Input() mobileNumber = 0;
  constructor(private modalService: NgbModal) { }
  closeModal() {
    this.modalService.dismissAll();
  }
}
