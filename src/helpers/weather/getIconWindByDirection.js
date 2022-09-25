export const getIconWindByDirection = (direction)=>{
    const wind=document.createElement('div');
    wind.style.display='inline-block';
    wind.style.backgroundImage='url(../../public/weather/icons/wind1.png)';
    wind.style.backgroundSize='cover';
    wind.style.transform=`rotate(${direction}deg)`;
    wind.style.width='20px';
    wind.style.height='20px';
    return wind;
}