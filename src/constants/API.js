export const API = {
    main:'https://app.unkle.pro/app/main'
}

export function MainPageRequest(){
    return fetch(API.main)
    .then(res => res.json())
    .then(res=>{
        console.log(res)
        return res;
    })
    .catch(err=>console.log(err))
}