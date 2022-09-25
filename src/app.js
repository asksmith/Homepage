import {getBookmarkItems, getWeatherLocations} from './helpers/storage.js';
import {getLocationItemView} from './views/weather/getLocationItemView.js';
import {getBookmarkItemView} from './views/bookmark/getBookmarkItemView.js';
import {getLocationSearcherView} from './views/weather/getLocationSearcherView.js';
import {getBookmarkSearcherView} from './views/bookmark/getBookmarkSearcherView.js';
import {bindLocationItemView} from './binders/weather/bindLocationItemView.js';
import {bindBookmarkItemView} from './binders/bookmark/bindBookmarkItemView.js';
import {bindLocationSearcherView} from './binders/weather/bindLocationSearcherView.js';
import {bindBookmarkSearcherView} from './binders/bookmark/bindBookmarkSearcherView.js';
import {getDescriptionByBookmark} from './helpers/bookmark/getDescriptionByBookmark.js';

function main(){
    const locations=getWeatherLocations();
    getLocationSearcherView().then((element)=>{
        bindLocationSearcherView(element)
    })
    locations.forEach((location)=>{
        getLocationItemView(location).then((element)=>{
            bindLocationItemView(element);
        })
    })
    const bookmarks=getBookmarkItems();
    getBookmarkSearcherView().then((element)=>{
        bindBookmarkSearcherView(element)    
    })
    bookmarks.forEach((bookmark)=>{
        getBookmarkItemView(bookmark).then((element)=>{
            bindBookmarkItemView(element);
        })
    })

}

window.addEventListener('load',main);