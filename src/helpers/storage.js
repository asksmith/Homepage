export const getData = (storageId) =>{
    let storage=JSON.parse(localStorage.getItem(storageId));
    if (!Array.isArray(storage)){
        storage=[];
    }
    return storage;
}
export const addData=(storageId,value)=>{
    const storage=getData(storageId);
    if (! storage.includes(value)){
        storage.push(value);
    }
    localStorage.setItem(storageId,JSON.stringify(storage));
}
export const delData=(storageId,value)=>{
 const storage=getData(storageId);
 localStorage.setItem(storageId,JSON.stringify(storage.filter(itemValue=>itemValue!==value)));
}

export const addBookmarkItem = (bookmark)=>{
    addData('bookmarkItems',bookmark);
}
export const addWeatherLocation = (location)=>{
    addData('weatherLocations',location);
}

export const getBookmarkItems = () =>{
    return getData('bookmarkItems');
}
export const getWeatherLocations = () =>{
    return getData('weatherLocations');
}

export const delWeatherLocation = (location)=>{
    delData("weatherLocations",location);
}
export const delBookmarkItem = (bookmark)=>{
    delData("bookmarkItems",bookmark);
}