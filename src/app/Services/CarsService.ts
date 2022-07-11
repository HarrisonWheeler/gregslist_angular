import { api } from "../AxiosService"
import { CarDetailsPageComponent } from "../car-details-page/car-details-page.component";
import { CarComponent } from "../car/car.component";
import { Car } from "../Models/Car"


class CarsService{

  async deleteCar(carId: string) {
    await api.delete(`api/cars/${carId}`)

  }

  async getCars(){
    const res = await api.get('api/cars')
    console.log('get cars response:', res.data)
    const mappedCars = res.data.map((c: Car) => new Car(c))
    console.log("mappedCars array", mappedCars);
    return mappedCars

  }

}

export const carsService = new CarsService()
