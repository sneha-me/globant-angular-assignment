import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  currentDay : any ;
  constructor() { 
    this.currentDay = new Date();
  }

  ngOnInit() {
  }

}
