import {cities} from './cities.js';

export const getImagesByLocation=async (location)=>{
    const city=cities.find(city=>city.name===location);
    if (location==='New York City'){
        location='New York'
    }
    const TELEPORT_API=`https://api.teleport.org/api/urban_areas/slug:${location.toLowerCase().replace(' ','-')}/images`;
    if (city){
        try{
            const request=await fetch(TELEPORT_API);
            if (request.status===200){
                try{
                    const cityInfo=await request.json();
                    return cityInfo.photos.shift();
        
                }catch(error){
                    return null;
                }
            }
        }catch (error){
            return null;
        }
    }
}