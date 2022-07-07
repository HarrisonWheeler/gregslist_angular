import { Component, OnInit } from '@angular/core';
import { api } from '../AxiosService';
import { Car } from '../Models/Car';
import { carsService } from '../Services/CarsService';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() {}

   cars: Car [] = []

   async getCars(){
    try {
    this.cars = await carsService.getCars()
    } catch (error) {
      console.error(error)
    }
   }

  ngOnInit(): void {
    this.getCars()
  }

}
