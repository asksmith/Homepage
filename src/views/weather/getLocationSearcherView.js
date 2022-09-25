import {locationSearcherController} from "../../controllers/weather/locationSeacherController.js";

export const getLocationSearcherView=async ()=>{
    const element=document.createElement('div');
    
    element.innerHTML=String.raw`
    <b>It's all about weather</b>
    Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.
    <p>
        <small>Add you favorite city and see what weather is there</small>
        <br>
        <input type="text" placeholder="City name" list="cities">
        <input type="submit" value="Add city">
    </p>
    <datalist id="cities">
    </datalist>
    `;
    element.querySelector('input[type="text"]').addEventListener('input',(event)=>{
        locationSearcherController('input',event.target.value,event.target,element.querySelector('#cities'));
    })
    element.querySelector('input[type="submit"]').addEventListener('click',()=>{
        locationSearcherController('addLocation',element.querySelector('input[type="text"]').value,element,element.querySelector('input[type="text"]'));
    })

    return element;
}