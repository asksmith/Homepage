import { delBookmarkItem } from "../../helpers/storage.js";
export const bookmarkItemController=(eventName,bookmark,ref)=>{
    if (eventName=='remove'){
        delBookmarkItem(location);
        ref.parentNode.removeChild(ref);
    }
}