import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getdetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColorandBrandId(colorId:number, brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycolorandbrandid?colorid="+colorId+"&brandid="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
}
