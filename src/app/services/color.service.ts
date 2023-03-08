import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }

}
