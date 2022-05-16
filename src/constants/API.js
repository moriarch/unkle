export const API = {
    main:'https://app.unkle.pro/app/main'
}

export function MainPageRequest(){
    return fetch(API.main)
    .then(res => res.json())
    .then(res=>{
        return res;
    })
}