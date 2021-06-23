// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
const text = document.getElementById(`text`);
const btn = document.getElementById(`btn1`);

btn.onclick = () => {
    if (text.style.visibility === `hidden`) {
        return text.style.visibility = `initial`;
    }
    text.style.visibility = `hidden`;
}

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
btn.onclick = () => {
    btn.hidden = true;
}
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
const inputAge = document.getElementById(`age`);
btn.onclick = () => {
    if (+inputAge.value >= 18) {
        alert(`you are >= 18`);
        return;
    }
    alert(`you are < 18`);
}
// - Створіть меню, яке розгортається/згортається при клику
const btn2 = document.getElementById(`btn2`);
const menu = document.getElementById(`menu`);
btn2.onclick = () => {
    let flag = true;
    if (menu.hidden === flag) {
        return menu.hidden = !flag;
    }
    return menu.hidden = flag;
}
// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
const comments = [{title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'something', body: 'bla bla bla'}];

const divList = document.getElementById(`list`);
comments.forEach(item => {
    let div = document.createElement(`div`);
    let title = document.createElement(`h3`);
    let body = document.createElement(`p`);
    let button = document.createElement(`button`);

    button.innerHTML = `hide`;
    button.onclick = () => {
        body.hidden = !body.hidden;
    }

    title.innerHTML = item.title;
    body.innerHTML = item.body;
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(button)
    divList.appendChild(div);
})


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const myButton = document.getElementById(`subBtn`);

myButton.onclick = () => {
    for (const form of document.forms) {
        for (const item of form) {
            console.log(item.value)
        }
    }
}
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

createTable = (row, column, element) => {
    const table = document.createElement(`table`);
    let targetTag = document.createElement(element);
    targetTag.appendChild(table);

    for (let i = 0; i < row; i++) {
        const tr = document.createElement(`tr`)
        for (let j = 0; j < column; j++) {
            const td = document.createElement(`td`)
            td.innerText = `111`
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(targetTag);
}
createTable(5, 6, `div`)

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

const imgArr = [`first.jpg`, `second.jpg`, `third.jpg`, `fourth.jpg`];
const img = document.getElementById(`img`);

const nextBtn = document.getElementById(`next`);
const previousBtn = document.getElementById(`previous`);

let currentPosition = 0;

nextBtn.onclick = () => {
    if (currentPosition === imgArr.length - 1) {
        currentPosition = 0;
    } else {
        currentPosition++;
    }
    img.src = imgArr[currentPosition];
}
previousBtn.onclick = () => {
    if (currentPosition === 0) {
        currentPosition = imgArr.length - 1;
    } else {
        currentPosition--;
    }
    img.src = imgArr[currentPosition];
}


//
// ______________________________________________________________________________________________________________________________________________________
//                                                               РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
const badWords = [`bad word`, `very bad word`];
const input = document.getElementById(`badWords`);
const checkButton = document.getElementById(`checkBut`);

checkButton.onclick = () => {
    if (badWords.includes(input.value)) {
        alert(`do no do that`);
    }
}
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
checkButton.onclick = () => {
    let wordsFromStatement = input.value.split();
    for (let word of wordsFromStatement) {
        if (badWords.includes(word)) {
            alert(`do no do that`);
        }
    }
}

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
const check2 = document.getElementById(`check2`);
const check3 = document.getElementById(`check3`);
const check1 = document.getElementById(`check1`);
let target = document.getElementById(`filter`);

filter = () => {
    let filtered = null;

    if (check1.checked) {
        filtered = usersWithAddress.filter(value => !value.isMarried);
    } else if (check2.checked) {
        filtered = usersWithAddress.filter(value => value.age >= 29);
    } else if (check3.checked) {
        filtered = usersWithAddress.filter(value => value.address.city === `Kyiv`);
    } else {
        target.innerText = ``;
    }
    if (filtered) {
        for (const user of filtered) {
            target.innerText += JSON.stringify(user);
        }
    }

}




