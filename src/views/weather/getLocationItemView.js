import {getWeatherByLocation} from '../../helpers/weather/getWeatherByLocation.js';
import {getImagesByLocation} from '../../helpers/weather/getImagesByLocation.js';
import {getIconClassesByWeather} from '../../helpers/weather/getIconClassesByWeather.js';
import {getIconWindByDirection} from '../../helpers/weather/getIconWindByDirection.js';
import {getCountryFlagByCityName} from '../../helpers/weather/getCountryFlagByCityName.js';
import {locationItemController} from '../../controllers/weather/locationItemController.js';

export const getLocationItemView = async (location)=>{
    const countryFlag=getCountryFlagByCityName(location);

    const element=document.createElement('div');
    element.innerHTML=String.raw`
    <ul class="icons">
        <li class="countryFlag">${countryFlag}</li>
        <li>
        </li>
    </ul>
    <div class="temperature"></div>
    <div class="title" title="More about the city.">${location}</div>
    <div class="remove">Remove location</div>
    `;
    element.className='location';
    element.querySelector('.remove').addEventListener('click',()=>{
        locationItemController('remove',location,element);
    })

    element.querySelector('.title').addEventListener('click',()=>{
        locationItemController('moreInfo',location,element);
    });

    getWeatherByLocation(location).then((weather)=>{
        element.querySelector('.temperature').innerHTML=`${weather.current_weather.temperature}&deg;`;

        const icons=getIconClassesByWeather(weather);
        const ul=element.querySelector(`ul.icons`);
        const title=icons.shift();
        icons.forEach((icon)=>{
            const li=document.createElement('li');
            li.className=icon.join(' ');
            li.setAttribute('title',title)
            ul.appendChild(li);
        });
        const wind=document.createElement('li');
        const windIco=getIconWindByDirection(weather.current_weather.winddirection).outerHTML;
        wind.innerHTML=String.raw`
        <div class="windspeed" title="Wind speed">
            <div class="icon">${windIco}</div>
            <sup class="text">${weather.current_weather.windspeed} km/h</sup>
        </div>`;
        ul.appendChild(wind)
    }).catch((error)=>{
        element.querySelector('.temperature').innerHTML='0&deg;'
        element.querySelector('.icons').innerHTML="<li style='color:red'>error loading info</li>"
    });
    getImagesByLocation(location).then((images)=>{
        if (images){
            element.style.backgroundImage=`url('${images.image.mobile}')`;
        }else{
            element.style.backgroundImage=`url('/public/weather/city.jpg')`;
        }
    });
    ;
    return element;
}