
export interface temp{
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number

sea_level: number,
grnd_level: number,

temp_kf: number
}

 export interface weather{

  coord: {
    lon: number,
    lat: number
    },

  dt: number,
  main: {
    temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number

sea_level: number,
grnd_level: number,

temp_kf: number
  },
  weather: [
  {
    id: number,
    main: string,
    description: string,
     icon: string
  }
  ],

  wind: {
  speed: number,
  deg: number,
  gust: 6.54
  },
  visibility: 10000,

  sys: {

  country:string
  }
 name:string
 }

 export interface forecast{
  daily: [
    {
    dt: number,
    temp: {
      day: number,
      min: number,
      max: number,
    },
    feels_like: {
    day: number,
    night: number,
    eve: number,
    morn: number
    },

    humidity: number,
    wind_speed: number,
    weather: [
    {
    id:number,
    main: string,
    description: string,

    }
    ]

    }]

 }





// export interface forecast {

//   list: [
//     weather,

//   ],
//   city: {
//     id: number,
//     name: string,
//     "coord": {
//     lat: number,
//     lon: number
//     },
//     country: string,
//     population: number,
//     timezone: number,
//     sunrise: number,
//     sunset: number
//     }
// }
