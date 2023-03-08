import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand: Brand;



constructor(private brandService:BrandService ){}
ngOnInit(): void {
  this.getBrands();
}  

getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data
  })
}
setCurrentBrand(brand:Brand){
  this.currentBrand=brand;
}
getCurrentBrandClass(brand:Brand){
  if(brand==this.currentBrand){
    return "table-secondary"
  }else{
    return "table-light"
  }
}
// getCarsByBrand(brandId:number){
//   this.carService.getCarsByBrand(brandId).subscribe(response=>{
//     this.cars=response.data;
    
//   })

// }

}
