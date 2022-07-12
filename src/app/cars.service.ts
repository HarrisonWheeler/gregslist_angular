import { Injectable } from '@angular/core';
import { api } from './AxiosService';
import { Car } from './Models/Car';

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  private cars: Car[] = []

  constructor() { }

  async deleteCar(carId: string): Promise<Car[]> {
    await api.delete(`api/cars/${carId}`)
    this.cars = this.cars.filter(c => c.id !== carId)
    console.log(this.cars);

    return this.cars
  }

  async getCars(): Promise<Car[]> {
    const res = await api.get('api/cars')
    console.log('get cars response:', res.data)
    this.cars = res.data.map((c: Car) => new Car(c))
    return this.cars
  }
}


