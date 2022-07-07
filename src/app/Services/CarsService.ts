import { api } from "../AxiosService"
import { Car } from "../Models/Car"


class CarsService{

  async getCars(){
    const res = await api.get('api/cars')
    console.log('get cars response:', res.data)
    const mappedCars = res.data.map((c: Car) => new Car(c))
    console.log("mappedCars array", mappedCars);
    return mappedCars

  }

}

export const carsService = new CarsService()
