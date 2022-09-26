import { delBookmarkItem } from "../../helpers/storage.js";
export const bookmarkItemController=(eventName,bookmark,ref)=>{
    if (eventName=='remove'){
        delBookmarkItem(bookmark);
        ref.parentNode.removeChild(ref);
    }
}