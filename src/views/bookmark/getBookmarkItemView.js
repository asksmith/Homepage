import { bookmarkItemController } from "../../controllers/bookmark/bookmarkItemController.js";
import { getDescriptionByBookmark } from "../../helpers/bookmark/getDescriptionByBookmark.js";
import { getImageByBookmark } from "../../helpers/bookmark/getImageByBookmark.js";

export const getBookmarkItemView=async (bookmark)=>{
    const element=document.createElement('div');
    element.className='bookmark';
    element.innerHTML=String.raw`
    <div class="title" title=""></div>
    <div class="space" title="Visit website"></div>
    <div class="remove" title="Remove website from bookmarks">Remove website</div>
    `;
    element.querySelector('.remove').addEventListener('click',(event)=>{
        bookmarkItemController('remove',bookmark,element);
    });
    element.querySelector('.space').addEventListener('click',(event)=>{
        window.open(bookmark);
    });
    element.style.backgroundImage=`url('${getImageByBookmark(bookmark)}')`;
    element.style.backgroundPosition='0px 40px';
    element.style.backgroundSize='contain';

    getDescriptionByBookmark(bookmark).then((info)=>{
        const title=element.querySelector('.title');
        title.textContent=info.title;
        title.title=info.description;
    }).catch((error)=>{
        const title=element.querySelector('.title');
        title.innerHTML=`${error}<br>${bookmark}`;
        title.style.color='red'
    });
    return element;
}