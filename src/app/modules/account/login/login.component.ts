import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  Loginform: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.Loginform = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(50)],]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.Loginform.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Loginform.invalid) {
      return;
    }

    console.log(this.Loginform.value);
    this.router.navigate(['/dashboard'])
    

  }

}
