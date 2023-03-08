import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  colors:Color[]=[];
  currentColor:Color;
 

  constructor(private colorService:ColorService){}

  ngOnInit(): void {

      this.getColors();
     
    
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "table-secondary"
    }else{
      return "table-light"
    }
  }
  // getCarsByColor(colorId:number){
  //   this.carService.getCarsByColor(colorId).subscribe(response=>{
  //     this.cars=response.data;
      
  //   })

  // }

}
