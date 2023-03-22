import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  colors:Color[]=[];
  brands:Brand[]=[];
  currentCar:Car;
  imageUrl="https://localhost:44351/uploads/images/";
  filterText="";

  brandFilter: number = 0;
  colorFilter: number = 0;
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private colorService:ColorService,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private cartService:CartService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
        this.getColors()
        this.getBrands();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars =response.data
    })
   }
   getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars =response.data
    })
   }
   getCarImage(car:Car){
    if(car.carImage==null){
      let path=this.imageUrl+"4b7aba6f-9910-4ed6-9542-ddad8bea07b0.jpg" 
      return path;
    }else{
      let path=this.imageUrl+car.carImage;
      return path;
    }

    }
    setCurrentCar(car:Car){
      this.currentCar=car;
    }
    getCarsByColorandBrandId(colorId:number, brandId:number){
      this.carService.getCarsByColorandBrandId(colorId,brandId).subscribe(response=>{
        this.cars=response.data
      })
    }
    getColors(){
      this.colorService.getColors().subscribe(response=>{
        this.colors=response.data
      })
    }
    
getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data
  })
}
addToCart(car:Car){ 
  this.toastrService.success("Sepete eklendi",car.modelName)
  this.cartService.addToCart(car);
}
}



