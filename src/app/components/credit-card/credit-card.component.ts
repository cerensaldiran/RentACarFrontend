import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  paymentForm:FormGroup;

constructor(private paymentService:PaymentService,
  private toastrService:ToastrService,
  private formBuilder:FormBuilder){}

  ngOnInit(): void {
      this.createRentalAddForm();
  }
  createRentalAddForm(){
    this.paymentForm=this.formBuilder.group({
      name:["", Validators.required],
      cardNumber:["",Validators.required],
      cvv:["",Validators.required],
      expirationMonth:["",Validators.required],
      expirationYear:["",Validators.required]
    })


  }
  pay(){
    if(this.paymentForm.valid){
      let payment:Payment=Object.assign({},this.paymentForm.value)
      this.paymentService.pay(payment).subscribe(response=>{
        this.toastrService.success(response.message, "Ödeme Yapıldı!");
      
      },responseError=>{
      this.toastrService.error(responseError.error.message)
        console.log(responseError)
      })
    }
    else{
      console.log(console.error);
      
      this.toastrService.error("Hata!","Bir şeyler ters gitmiş olmalı!")
    }
  }

}
