import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarImageService  {
  apiUrl="https://localhost:44351/"


  constructor(private httpClient:HttpClient) { }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl+"api/CarImage/getbycarid?carId="+carId
    // https://localhost:44351/api/CarImage/getbycarid?carId=2
    // https://localhost:44351/api/carImage/getbycarid?carId=undefined

    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)

  }
  getImages(carImage:string):Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl+"uploads/images/="+carImage
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)

  }
  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);    
   }
   
   

}
