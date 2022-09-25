export const bindBookmarkSearcherView=(bookmarkSearcher)=>{
    const title=document.querySelector('#bookmark-section>.sectionTitle');
    title.appendChild(bookmarkSearcher);
}