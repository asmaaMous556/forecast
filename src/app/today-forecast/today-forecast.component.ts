


import { ForecastService } from './../service/forecast.service';
import { Component, OnInit } from '@angular/core';
import { forecast } from '../types/forecast';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.scss']
})
export class TodayForecastComponent implements OnInit {
  public forecastData:boolean=false;
 public city:string='';
 public temp:number=0;
public feelsLike:number=0;
public currentWeather:string=''
public humidity:number=0;
public windSpeed:number=0;
public list !:any[]
 public dt!: Date;
public currentDate!:Date
lat!:number;
lng!:number
daily!:any[]
  constructor(private forecast:ForecastService) { }

  ngOnInit(): void {
    this.getTodayForecast();

  }


  getWeekForecast(){
    this.forecast.getForecastData(this.lat,this.lng).subscribe(res=>{
      console.log(res);

    })
  }


  getTodayForecast(){
    this.forecast.getCurrentWeather().subscribe(res=>{
      if(res){
        console.log(res);
      this.forecastData=true
      this.city=res.name;
      this.feelsLike=res.main.feels_like;
      this.currentWeather=res.weather[0].description
      this.temp=res.main.temp
      this.humidity=res.main.humidity
      this.windSpeed=res.wind.speed
      this.lat=res.coord.lat
      this.lng=res.coord.lon
      console.log(this.lng);


 this.forecast.getForecastData(this.lat,this.lng).subscribe(res=>{
   console.log(res);
   this.daily=res.daily

 })

      // this.city=res.city.name;
      // this.feelsLike=res.list[0].main.feels_like;
      // this.currentWeather=res.list[0].weather[0].description
      // this.temp=res.list[0].main.temp
      // this.humidity=res.list[0].main.humidity
      // this.windSpeed=res.list[0].wind.speed
      // this.dt=res.list[0].dt_txt

    }

    },(error)=>{
      console.log(error);

    })

  }

}
