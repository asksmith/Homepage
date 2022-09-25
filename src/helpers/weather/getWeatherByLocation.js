import {cities} from './cities.js';

export const getWeatherByLocation=async (location)=>{
 const city=cities.find(city=>city.name===location);
 if (city){
   const weatherApi=`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
   const request=await fetch(weatherApi);
   if (request.status===200){
      return request.json();
   }
 }
 throw new Error('Unable to find city');
}

