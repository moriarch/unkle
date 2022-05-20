export const API = {
  main: 'https://app.unkle.pro/app/main',
  list: 'https://app.unkle.pro/app/main/category/',
  detail: 'https://app.unkle.pro/app/main/detail/',
  calculator: 'https://app.unkle.pro/app/calculator/',
};

export function MainPageRequest() {
  return fetch(API.main)
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}

export function ListPageRequest(id) {
  return fetch(API.list + id)
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}

export function DetailPageRequest(id) {
  return fetch(API.detail + id)
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}

// export function CalculatorPageRequest(){
//     return fetch(API.detail)
//     .then(res => res.json())
//     .then(res=>{
//         return res;
//     })
//     .catch(err=>console.log(err))
// }

const Calculator = [
  {
    id: 'hex1',
    name: 'Структура',
    section: [
      {
        name: 'Разработка структуры сайта\nи элементов страниц',
        childs: {
          type: 'radio',
          items: [
            {
              name: 'Нужна',
            },
            {
              name: 'Есть',
            },
          ],
        },
      },
      {
        name: 'Основные',
        childs: {
          type: 'check',
          items: [{name: 'name'}, {name: 'name1'}],
        },
      },
    ],
  },
  {
    id: 'hex16',
    name: 'Дизайн',
    section: []
  },
  {
    id: 'hex15',
    name: 'Контент',
    section: []
  },
  {
    id: 'hex14',
    name: 'Дополнительные функции',
    section: []
  },
  {
    id: 'hex13',
    name: 'Техническая часть',
    section: []
  },
  {
    id: 'hex12',
    name: 'Хочу дешевле',
    section: []
  },
];

export function CalculatorPageRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Calculator);
    }, 1000);
  });
}
