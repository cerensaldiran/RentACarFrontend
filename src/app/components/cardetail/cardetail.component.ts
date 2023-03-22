import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars:Car[]=[]
  imageUrl="https://localhost:44351/uploads/images/"
  carImages:CarImage[]=[]
  rentals:Rental[]=[]
  currentRental:Rental;
  

  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private rentalService: RentalService,
    private toastrService:ToastrService,
    private cartService:CartService){}
  
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        this.getCarById(params["carId"]),
        this.getCarImagesById(params["carId"])
       
        
      })
  }
  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>
      this.cars=response.data)
  }
  getCarImage(car:Car){
    if(car.carImage==null){
      let path=this.imageUrl+"4b7aba6f-9910-4ed6-9542-ddad8bea07b0.jpg" 
      return path;
     }
    else{
      let path=this.imageUrl+car.carImage;
      return path;
    }

    }
    getCarImagesById(carId:number){
      this.carImageService.getCarImagesById(carId).subscribe(response=>{
        this.carImages=response.data
      })
    }
    getImages(carImage:CarImage){
        let path =this.imageUrl+carImage.imagePath;
        return path;
      
    }
    addToCart(car:Car){
      this.toastrService.success("Sepete Eklendi", car.modelName)
      this.cartService.addToCart(car);
    }

}
