import { Component } from '@angular/core';
import { IPerson } from './interfaces/person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gbt-angular2-training';
  name: string = "sneha";
  hideHeading : boolean = false;
  persons: IPerson[] = [
    {
     name:'Sneha',
     age: 28,
     address: 'abc Strret1',
     email: 'snehanv24@gmail.com',
     isGraduate: true
    },
    {
      name:'Sanaya',
      age: 28,
      address: 'abc Strret2',
      email: 'sanaya@gmail.com',
      isGraduate: true
     },
     {
      name:'Somil',
      age: 28,
      address: 'abc Strret3',
      email: 'somil@gmail.com',
      isGraduate: false
     },
     {
      name:'Sohail',
      age: 28,
      address: 'abc Strret4',
      email: 'Sohail@gmail.com',
      isGraduate: true
     },
     {
      name:'Suyog',
      age: 16,
      address: 'abc Strret7',
      email: 'Suyog@gmail.com',
      isGraduate: false
     }
];
}
