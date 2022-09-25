import {addWeatherLocation,delWeatherLocation} from '../../helpers/storage.js';

export const locationItemController=(eventName,location,ref)=>{
    if (eventName=='remove'){
        delWeatherLocation(location);
        ref.parentNode.removeChild(ref);
    }
    if (eventName=='moreInfo'){
        window.open(`https://en.wikipedia.org/wiki/${location}`);
    }
}