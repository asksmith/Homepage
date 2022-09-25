export const getDescriptionByBookmark=(url)=>{
    const PREVIEW_KEY='18f09f39a601bd61a2e6adbd9bdd5a4c';
    const PREVIEW_URL=`http://api.linkpreview.net/?key=${PREVIEW_KEY}&q=${url}`;
    return fetch(PREVIEW_URL).then((response)=>{
        if (response.ok){
            return response.json();
        }else{
            throw new Error('Unable to load preview');
        }
    }).catch((error)=>{
        throw error;
    })
}