import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { forecast, weather } from '../types/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  ApiKey:string='c000ed7e5b280ae3aaa88ea45d3bdfd2'
  unit:string='metric';

  currentWeatherAPI:string='https://api.openweathermap.org/data/2.5/weather';
  dailyForecastAPI='https://api.openweathermap.org/data/2.5/onecall'


  constructor(private http:HttpClient) { }

  getCurrentWeather(cityName:string){


   return this.http.get(this.currentWeatherAPI,{
     params:{
       'q':cityName,
       'appid':this.ApiKey,
       'units':this.unit
     }
   }) as Observable<weather>

  }


  getForecastData(lat:number,lng:number){
    return  this.http.get(this.dailyForecastAPI,{
      params:{
        'lat':lat,
        'lon':lng,
        'exclude':'hourly,minutely',
         'appid':this.ApiKey,
         'units':this.unit

      }
    }) as Observable<forecast>
  }



}
