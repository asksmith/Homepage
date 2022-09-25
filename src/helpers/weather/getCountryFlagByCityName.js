import {cities} from './cities.js';
import {countries} from './countries.js';

export const getCountryFlagByCityName=(location)=>{
    const city=cities.find(city=>city.name===location);
    return city?countries[city.country].emoji:null;
}