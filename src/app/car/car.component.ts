import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../Models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  // This 'registers' the cars service to be injected into this component
  providers: [CarsService]
})
export class CarComponent implements OnInit {

  constructor(private service: CarsService) {
    this.carsService = service
  }

  carsService: CarsService = new CarsService()
  cars: Car[] = []

  async getCars(): Promise<void> {
    try {
      const cars: Car[] = await this.carsService.getCars()
      this.cars = cars
    } catch (error) {
      console.error(error)
    }
  }

  async deleteCar(carId: string) {
    try {
      const cars: Car[] = await this.carsService.deleteCar(carId)
      this.cars = cars
    } catch (error) {
      console.error(error)
    }
  }

  ngOnInit(): void {
    this.getCars()
  }

}
