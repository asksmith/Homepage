import { addBookmarkItem, delBookmarkItem } from "../../helpers/storage.js"
import { bindBookmarkItemView } from "../../binders/bookmark/bindBookmarkItemView.js"
import { getBookmarkItemView } from "../../views/bookmark/getBookmarkItemView.js"
import { isValidURL } from "../../helpers/bookmark/isValidURL.js"

export const bookmarkSearcherController=(eventName,data,ref)=>{
    if (eventName==='add'){
        if (isValidURL(data)){
            const element=getBookmarkItemView(data).then((element)=>{
                addBookmarkItem(data);
                bindBookmarkItemView(element);
                ref.value='';
            });
        }else{
            const notification=document.createElement('div');
            notification.className='notification';
            notification.innerHTML='Address should be an URL<br>http://www.microsoft.com/';
            ref.parentNode.appendChild(notification);
            setTimeout(()=>{
                notification.parentNode.removeChild(notification)
            },2000)
        }
    }
}