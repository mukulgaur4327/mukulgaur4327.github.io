import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search:any;
  constructor(private location:Location){}
  goBack() {
    this.location.back();
  }
  
  
}
