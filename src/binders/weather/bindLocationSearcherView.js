export const bindLocationSearcherView=(searcher)=>{
    const title=document.querySelector('#weather-section>.sectionTitle');
    title.appendChild(searcher);
}