import {addWeatherLocation} from '../../helpers/storage.js';
import {cities} from '../../helpers/weather/cities.js';
import {countries} from '../../helpers/weather/countries.js';
import {getLocationItemView} from '../../views/weather/getLocationItemView.js';
import {bindLocationItemView} from '../../binders/weather/bindLocationItemView.js';

export const locationSearcherController=(eventName,data,ref,target)=>{
    if (eventName==='input'){
        const cityTips=cities.filter(city=>city.name.toLowerCase().startsWith(data.toLowerCase()));
        target.innerHTML='';
        cityTips.slice(0,10).forEach(city=>{
            const option=document.createElement('option');
            option.innerHTML=`${countries[city.country].emoji}&nbsp;${countries[city.country].name}`;
            option.setAttribute('value',city.name);
            target.appendChild(option);
        });
        ref.value=data;
    }
    if (eventName==='addLocation'){
        getLocationItemView(data).then((element)=>{
        bindLocationItemView(element);
        addWeatherLocation(data);
        target.value='';
        })
    }
}