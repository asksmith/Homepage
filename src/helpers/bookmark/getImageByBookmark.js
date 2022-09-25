export const getImageByBookmark=(url)=>{
    const SAVEPAGE_KEY='3bf2084dfcdcc462efb21daf8c377470';
    return `http://www.ask-me.ru/savepage.php?KEY_FOR_LOAD=${SAVEPAGE_KEY}&URL_FOR_LOAD=${url}`;
}