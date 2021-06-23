// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

const textArea = document.getElementById(`textArea`);
const button = document.getElementById(`saveBtn`);

textArea.value = localStorage.getItem(`textArea`);
button.onclick = () => {
    localStorage.setItem(`textArea`, textArea.value)
}


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
const form = document.getElementById(`myForm`);
for (const input of form) {
    if (input.type === `text`) {
        input.value = localStorage.getItem(input.name)
    }
    if (input.type === `checkbox`) {
        input.checked = JSON.parse(localStorage.getItem(input.id));
    }
    if (input.type === `radio`) {
        input.checked = JSON.parse(localStorage.getItem(input.id));
    }
    if (input.type === `select-one`) {
        input.value = localStorage.getItem(input.id);
    }
}
form.onchange = ({target: {value, name, id, type, checked,}}) => {
    console.log(name, value, id, type, checked)
    if (type === `text`) {
        localStorage.setItem(name, value);
    }
    if (type === `radio`) {
        localStorage.setItem(id, checked);
    }
    if (type === `checkbox`) {
        localStorage.setItem(id, checked);
    }
    if (type === `select-one`) {
        localStorage.setItem(id, value);
    }
}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
const nextBtn = document.getElementById(`next`);
const previousBtn = document.getElementById(`previous`);
const text = document.getElementById(`textAr`);
const saveBtn = document.getElementById(`saveButton`);
const key = `history`;

saveBtn.onclick = () => {
    let temp = localStorage.getItem(key);
    if (temp === null) {
        temp = `start point`;
    }
    let readyToSet = temp + `  ` + text.value;
    localStorage.setItem(key, readyToSet);
}

let history = localStorage.getItem(key);
let currentIndex = 0;
if (history) {
    history = history.split(`  `);
    currentIndex = history.length - 1;
}


nextBtn.onclick = () => {
    if (currentIndex === history.length - 1) {
        currentIndex = 1;
    } else {
        currentIndex++;
    }
    text.value = history[currentIndex];
}
previousBtn.onclick = () => {
    if (currentIndex === 1) {
        currentIndex = history.length - 1;
    }
    currentIndex--;
    text.value = history[currentIndex];
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const sendBtn = document.getElementById(`sendBtn`);
const editBtn = document.getElementById(`editBtn`);
const deleteBtn = document.getElementById(`delBtn`);

const name = document.getElementById(`name`);
const phone = document.getElementById(`phone`);
const mail = document.getElementById(`mail`);
const department = document.getElementById(`dep`);
const birthday = document.getElementById(`birthday`);

const editForm = document.getElementById(`editForm`);
const editname = document.getElementById(`editname`);
const editphone = document.getElementById(`editphone`);
const editmail = document.getElementById(`editmail`);
const editdepartment = document.getElementById(`editdep`);
const editbirthday = document.getElementById(`editbirthday`);
const confirmBtn = document.getElementById(`confirmButt`);

deleteBtn.onclick = () => {
    localStorage.removeItem(name.value);
}

sendBtn.onclick = () => {
    let userInfo = {
        name: name.value,
        phone: phone.value,
        mail: mail.value,
        department: department.value,
        birthday: birthday.value
    };
    localStorage.setItem(name.value, JSON.stringify(userInfo))
}

editBtn.onclick = () => {
    editForm.style.visibility = `initial`;
    let user = localStorage.getItem(name.value);
    let parseUser = JSON.parse(user);

    editname.value = parseUser.name;
    editphone.value = parseUser.phone;
    editmail.value = parseUser.mail;
    editdepartment.value = parseUser.department;
    editbirthday.value = parseUser.birthday;
}
confirmBtn.onclick = () => {
    let userInfo = {
        name: editname.value,
        phone: editphone.value,
        mail: editmail.value,
        department: editdepartment.value,
        birthday: editbirthday.value
    };
    localStorage.setItem(editname.value, JSON.stringify(userInfo))
}
