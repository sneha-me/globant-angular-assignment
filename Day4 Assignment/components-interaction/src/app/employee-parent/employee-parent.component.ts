import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-parent',
  templateUrl: './employee-parent.component.html',
  styleUrls: ['./employee-parent.component.css']
})
export class EmployeeParentComponent implements OnInit {

  employees: any;

  constructor() { 
    
  }

  ngOnInit() {
    this.employees = [
      {
       empId: 101,
       name:'Sneha',
       age: 28,
       designation: 'Web UI Developer',
       salary: 35000
      },
      {
        empId: 102,
        name:'Sanaya',
        age: 28,
        designation: 'Software Engg',
        salary: 20000
       },
       {
        empId: 103,
        name:'Somil',
        age: 28,
        designation: 'System Engg',
        salary: 10000
       },
       {
         empId: 104,
        name:'Sohail',
        age: 28,
        designation: 'Web UI Developer',
        salary: 30000
       },
       {
        empId: 105,
        name:'Suyog',
        age: 16,
        designation: 'NodeJS developer',
        salary: 25000
       }
   ]
  }

}
