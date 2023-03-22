import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCard';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44351/api/"

  constructor(private httpClient:HttpClient) { }

  pay(payment:Payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"payment/pay",payment)
  }


}
