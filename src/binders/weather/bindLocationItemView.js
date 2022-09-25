export const bindLocationItemView=(locationItem)=>{
    const content=document.querySelector('#weather-section .sectionContent');
    content.appendChild(locationItem);
}