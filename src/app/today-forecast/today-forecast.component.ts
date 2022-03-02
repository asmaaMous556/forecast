import { weather } from './../types/forecast';




import { ForecastService } from './../service/forecast.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




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
 public dt!: number;
public currentDate!:Date
lat!:number;
lng!:number
daily!:any[]
forecastForm!:FormGroup
  country!: string;
  cityName:string='';
  constructor(private forecast:ForecastService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getTodayForecast();
    this.initForm()

  }

  initForm(){
    this.forecastForm=this.fb.group({
      cityName:this.fb.control('',[Validators.required])
    })

  }



  getTodayForecast(){
    this.forecast.getCurrentWeather(this.cityName?this.cityName :'cairo').subscribe(res=>{
      if(res){
   this.resHandling(res);
   this.getWeekForecast(res.coord.lat,res.coord.lon)

 }},(error)=>{
      console.log(error);
})}

getWeekForecast(lat:number,lng:number){
  this.forecast.getForecastData(lat,lng).subscribe(res=>{
    this.daily=res.daily

  },(error)=>{
    console.log(error);

  })
}

  submit(){
    this.cityName=this.forecastForm.value.cityName
  this.forecast.getCurrentWeather(this.forecastForm.value.cityName).subscribe(res=>{

    this.resHandling(res);
    this.getWeekForecast(res.coord.lat,res.coord.lon)


  },(error)=>{
    console.log(error);

  })}


  resHandling(res:weather){

    this.forecastData=true
    this.city=res.name;
    this.feelsLike=res.main.feels_like;
    this.currentWeather=res.weather[0].description
    this.temp=res.main.temp
    this.humidity=res.main.humidity
    this.windSpeed=res.wind.speed
    this.lat=res.coord.lat
    this.lng=res.coord.lon
    this.dt=res.dt
    this.country=res.sys.country
  }

}
