import { bookmarkSearcherController } from "../../controllers/bookmark/bookmarkSearcherController.js";

export const getBookmarkSearcherView=async ()=>{
    const element=document.createElement('div');
    element.innerHTML=String.raw`
    <b>It's all about data</b>
    The ability to take data – to be able to understand it, to process it, to extract value from it, to visualise it, to communicate it – is going to be a hugely important skill in the next decades.
    <p>
    <small>Add you favorite website</small>
        <br>
        <input type="text" placeholder="http://www.google.com/" list="cities">
        <input type="submit" value="Add website">
    </p>
    `;

    element.querySelector('input[type=submit]').addEventListener('click',(event)=>{
        const textField=element.querySelector('input[type=text]');
        bookmarkSearcherController('add',textField.value,textField);
    })
    return element;    
}