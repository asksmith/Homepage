import { addBookmarkItem } from "../../helpers/storage.js"
import { bindBookmarkItemView } from "../../binders/bookmark/bindBookmarkItemView.js"
import { getBookmarkItemView } from "../../views/bookmark/getBookmarkItemView.js"

export const bookmarkSearcherController=(eventName,data,ref)=>{
    if (eventName==='add'){
        const element=getBookmarkItemView(data).then((element)=>{
            addBookmarkItem(data);
            bindBookmarkItemView(element);
            ref.value='';
        });
        

    }
}