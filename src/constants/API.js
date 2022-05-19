export const API = {
    main:'https://app.unkle.pro/app/main',
    list:'https://app.unkle.pro/app/main/category/',
    detail:'https://app.unkle.pro/app/main/detail/',
    calculator:'https://app.unkle.pro/app/calculator/'
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


// export function CalculatorPageRequest(){
//     return fetch(API.detail)
//     .then(res => res.json())
//     .then(res=>{
//         return res;
//     })
//     .catch(err=>console.log(err))
// }


const Calculator =[
    {
        id:'hex1',
        name:'Структура'
    },
    {
        id:'hex16',
        name:'Дизайн'
    },
    {
        id:'hex15',
        name:'Контент'
    },
    {
        id:'hex14',
        name:'Дополнительные функции'
    },
    {
        id:'hex13',
        name:'Техническая часть'
    },
    {
        id:'hex12',
        name:'Хочу дешевле'
    },
];

export function CalculatorPageRequest(){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Calculator);
        }, 1000);
      });
}