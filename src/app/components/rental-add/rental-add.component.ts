import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit{
  rentalAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
      this.createRentalAddForm();
  }
  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      carId:["", Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      customerId:["",Validators.required]
    })


  }
  add(){
    if(this.rentalAddForm.valid){
      let rental:Rental=Object.assign({},this.rentalAddForm.value)
      this.rentalService.add(rental).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı!");
      
      },responseError=>{
      this.toastrService.error(responseError.error.message)
        
      })
    }
    else{
      console.log(console.error);
      
      this.toastrService.error("Hata!","Bir şeyler ters gitmiş olmalı!")
    }
  }

}
