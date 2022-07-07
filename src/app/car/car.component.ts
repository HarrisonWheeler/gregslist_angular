import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  cars: {year: number, make: string} [] =  [{year: 1993, make: "Mercedes Diesel"}, {year: 2021, make: "Mazda"}, {year: 2019, make: "Civic"}, {year: 2011, make: "Focus"}]

  ngOnInit(): void {
  }

}
