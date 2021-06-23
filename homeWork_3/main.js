// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
//
// const contentIdText=document.getElementById('content')
// console.log(contentIdText);

// b) отримує текст з блоку з id "rules"
//
// const divkaText = document.getElementsByClassName('fc bp');
// console.log(divkaText);

// c) замініть текст параграфа з id 'content' на будь-який інший
//
// let contentIdText = document.getElementById('content')
// contentIdText.innerText=('lorem does not work(');

// d) замініть текст параграфа з id 'rules' на будь-який інший
//
// let divText = document.getElementsByClassName('fc bp');
// for (const element of divText) {
//     element.innerText=(`bla bla bla`)
// }
// console.log(divText);

// e) змініть кожному елементу колір фону на червоний
//
// let bodyElement=document.body.getElementsByTagName(`*`);
// for (const bodyItem of bodyElement) {
//     bodyItem.style.backgroundColor='red';
// }
// console.log(bodyElement);

// f) змініть кожному елементу колір тексту на синій
//
// let bodyElement=document.body.getElementsByTagName(`*`);
// for (const bodyItem of bodyElement) {
//     bodyItem.style.color='blue';
// }

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let divText = document.getElementById('rules');
// console.log(divText.classList);

// h) отримати всі елементи з класом fc_rules
//
// let fc_rulesItems=document.getElementsByClassName(`fc_rules`);
// for (const elements of fc_rulesItems) {
//     console.log(elements);
// }

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let fc_rulesItems = document.getElementsByClassName(`fc_rules`);
// for (const elements of fc_rulesItems) {
//     elements.style.color = `red`;
// }

// ===================================================================

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Вставити цей блок на сторінку
// for (const user of users) {
//     const userDivs = document.createElement(`div`);
//     userDivs.innerHTML = `${user.name} <br> ${user.age} <br> ${user.status} <br>
//     ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber} <br> ---------------------------------------`;
//
//     document.body.appendChild(userDivs);
// }

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//   Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// for (const user of users) {
//     const userDivs = document.createElement(`div`);
//     const addressDivs = document.createElement(`div`);
//     const cityDiv = document.createElement(`div`);
//     const countryDiv = document.createElement(`div`);
//     const streetDiv = document.createElement(`div`);
//     const houseNumberDiv = document.createElement(`div`);
//
//     userDivs.innerHTML = `${user.name} <br> ${user.age} <br> ${user.status} <br>`
//
//
//     cityDiv.innerHTML = `${user.address.city}`;
//     countryDiv.innerHTML = `${user.address.country}`;
//     streetDiv.innerHTML = `${user.address.street}`;
//     houseNumberDiv.innerHTML = `${user.address.houseNumber} <br> ---------------------------------------`;
//
//     addressDivs.appendChild(cityDiv);
//     addressDivs.appendChild(countryDiv);
//     addressDivs.appendChild(streetDiv);
//     addressDivs.appendChild(houseNumberDiv);
//
//     userDivs.appendChild(addressDivs);
//     document.body.appendChild(userDivs);
// }




// =====================================================================
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

//a) змінює текст елемнту з ід main_header на назву групи (mon-year)
//
// let mainHeader = document.getElementById(`main_header`);
// mainHeader.innerHTML = `FEBRUARY-2021`

//b) робить шириниу елементу ul 400px
//
// let ulElement = document.getElementsByTagName('ul');
// for (const item of ulElement) {
//     item.style.width = '400px';
// }

//c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let linkListClasses = document.getElementsByClassName(`linkList`);
// for (const item of linkListClasses) {
//     item.style.width = '50%';
// }

//d) отримує текст який зберігається в елементі з класом listElement2
//
// let someText = prompt(`type`);
// let listElem2 = document.getElementsByClassName(`listElement2`);
//
// for (const item of listElem2) {
//     item.innerHTML = `${someText}`;
// }

//e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let allLishky = document.getElementsByTagName(`li`);
//
// for (const item of allLishky) {
//     item.style.backgroundColor = `grey`;
// }

//f) отримує всі елементи 'a' та додає їм клас anchor
//
// let aElements = document.getElementsByTagName(`a`);
// console.log(aElements);
// for (const item of aElements) {
//     item.classList.add(`anchor`);
// }

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let aElements = document.getElementsByTagName(`a`);
// for (const item of aElements) {
//     if (item.text === `link3`) {
//         item.style.fontSize = `40px`;
//     }
// }

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let aElements = document.getElementsByTagName(`a`);
// for (const item of aElements) {
//     item.classList.add(`element_${item.text}`);
// }

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let subHeaderElements = document.getElementsByClassName(`sub-header`);
// for (const item of subHeaderElements) {
//     let userColor = prompt(`Example: red, green, blue`);
//     item.style.backgroundColor = userColor;
// }

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let subHeaderElements = document.getElementsByClassName('sub-header');
// for (const item of subHeaderElements) {
//     if (item.text === `content 2 segment`) {
//         let userColor = prompt(`Example: red, green, blue`);
//         item.style.color = userColor;
//
//     }
// }

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let content1Element = document.getElementsByClassName(`content_1`);
// for (const item of content1Element) {
//     item.innerText = prompt(`Enter some text: `);
// }

//l) отримати елементи p та змінити їм padding на 20px
//
// let pElements = document.getElementsByTagName(`p`);
// for (const item of pElements) {
//     item.style.padding = `20px`;
// }

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// let text2Element = document.getElementsByClassName(`text2`);
// for (const item of text2Element) {
//     item.innerText = `FEBRUARY-2021`;
// }


//----------------------------------------------------

// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

//
// for (const ruleItem of rules) {
//     const ruleDiv = document.createElement(`div`);
//     const titleDiv = document.createElement(`div`);
//     const bodyDiv = document.createElement(`div`);
//
//     titleDiv.innerHTML = `${ruleItem.title} `;
//     bodyDiv.innerHTML = `${ruleItem.body} <br> ------------------------------`;
//
//     ruleDiv.appendChild(titleDiv);
//     ruleDiv.appendChild(bodyDiv);
//
//     document.body.appendChild(ruleDiv)
//
// }

//=======================================================================
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//
//         let keyCity = Object.values(usersWithId[i]);
//         let keyUser = Object.values(citiesWithId[j]);
//
//         if (keyUser[0] === keyCity[0]) {
//             usersWithId[i].address=citiesWithId[j];
//         }
//     }
// }
// console.log(usersWithId);











