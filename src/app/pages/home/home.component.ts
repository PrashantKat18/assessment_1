import { Component, OnInit } from '@angular/core';
import { AddProvider } from '../../../../src/app/services/add';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public addProvider :AddProvider) { }
  
  ngOnInit() {
   
    
  }

}
