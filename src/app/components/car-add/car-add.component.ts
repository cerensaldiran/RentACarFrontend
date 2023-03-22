import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
      
  }
  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      description:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelName:["",Validators.required],
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel=Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı!");
      
      })
    }
    else{
      this.toastrService.error("Hata!","Beklenmeyen bir hata oluştu!")
    }
  }

}
