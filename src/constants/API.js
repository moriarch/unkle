export const API = {
    main:'https://app.unkle.pro/app/main',
    list:'https://app.unkle.pro/app/main/category/',
    detail:'https://app.unkle.pro/app/main/detail/',
}

export function MainPageRequest(){
    return fetch(API.main)
    .then(res => res.json())
    .then(res=>{
        return res;
    })
    .catch(err=>console.log(err))
}

export function ListPageRequest(id){
    return fetch(API.list+id)
    .then(res => res.json())
    .then(res=>{
        return res;
    })
    .catch(err=>console.log(err))
}

export function DetailPageRequest(id){
    return fetch(API.detail+id)
    .then(res => res.json())
    .then(res=>{
        return res;
    })
    .catch(err=>console.log(err))
}