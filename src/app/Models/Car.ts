

export class Car{
  id: string
  year: number
  make: string
  model: string
  imgUrl: string
  color: string
  description: string
  price: number
  createdAt: string
  updatedAt: string


  constructor(data: {id: string, year: number, make: string, model: string, imgUrl: string, color: string, description: string, price: number, createdAt: string, updatedAt: string}){
    this.id = data.id
    this.year = data.year
    this.make = data.make
    this.model = data.model
    this.color = data.color
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.price = data.price
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt

  }
}
