// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select


function DescribeTags(title, action) {
    this.tag = title;
    this.action = action;
    this.attributes = []

    this.addAttribute = function (name, action) {
        let attribute = {name: name, action: action};
        this.attributes.push(attribute);

    }
}

let aTag = new DescribeTags(`a`, ` устанавливает ссылку или якорь`);
aTag.addAttribute(`name`, `ссилка`);
aTag.addAttribute(`href`, `якорь`);
// console.log(aTag);

let divTag = new DescribeTags(`div`, ` выделения фрагмента документа`);
divTag.addAttribute(`align`, `Задает выравнивание содержимого`);
divTag.addAttribute(`title`, `Добавляет всплывающую подсказку к содержимому.`);
// console.log(divTag);

let h1Tag = new DescribeTags(`h1`, `наиболее важный заголовок первого уровня`);
h1Tag.addAttribute(`align`, `Определяет выравнивание заголовка.`)
// console.log(h1Tag);

let spanTag = new DescribeTags(`span`, `определения строчных элементов документа`);
spanTag.addAttribute(`accesskey`, `Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.`);
spanTag.addAttribute(`class`, `Определяет имя класса, которое позволяет связать тег со стилевым оформлением`);
spanTag.addAttribute(`hidden`, `Скрывает содержимое элемента от просмотра`);
// console.log(spanTag);

// Створити класс  для об'єкту який описує теги

class Description {
    constructor(name, action) {
        this.tagName = name;
        this.tagAction = action;
        this.attributes = [];
    }

    addAttribute(attrName, attrAction) {
        let attribute = {name: attrName, action: attrAction};
        this.attributes.push(attribute);
    }
}

let inputTag = new Description(`input`, `...обеспечить взаимодействие с пользователем`);
inputTag.addAttribute(`accept`, `Устанавливает фильтр на типы файлов`);
inputTag.addAttribute(`align`, `Определяет выравнивание изображения.`);
// console.log(inputTag);

let formTag = new Description(`form`, `устанавливает форму на веб-странице.`);
formTag.addAttribute(`name`, `Имя формы.`);
formTag.addAttribute(`method`, `Метод протокола HTTP.`);
// console.log(formTag);

let optionTag = new Description(`option`, `определяет отдельные пункты списка, создаваемого с помощью контейнера`);
optionTag.addAttribute(`label`, `Указание метки пункта списка.`);
optionTag.addAttribute(`disabled`, `Заблокировать для доступа элемент списка.`);
// console.log(optionTag);

let selectTag = new Description(`select`, `... создать элемент интерфейса в виде раскрывающегося списка`);
selectTag.addAttribute(`form`, `Связывает список с формой.`);
selectTag.addAttribute(`size`, `Количество отображаемых строк списка.`);
// console.log(selectTag);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, year, maxSpeed, capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;

    }

    drive() {
        return `Їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    info() {
        return `
        Модель: ${this.model} 
        виробник: ${this.manufacturer}
        рік випуску: ${this.year} 
        максимальна швидкість: ${this.maxSpeed} 
        об'єм двигуна: ${this.capacity}`;
    }

    increaseMaxSpeed(value) {
        this.maxSpeed += value;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let newCar = new Car(`BMW`, `German`, 2020, 300, `2`);
let driver = {name: `Ivan`, age: 24, driverLicense: true};
newCar.addDriver(driver);
newCar.increaseMaxSpeed(20);
newCar.changeYear(2021);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize) {
        this.Name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cin1 = new Cinderella(`Vika`, 20, 34);
let cin2 = new Cinderella(`Olya`, 19, 35);
let cin3 = new Cinderella(`Yulia`, 21, 36);
let cin4 = new Cinderella(`Oksana`, 20, 34.5);
let cin5 = new Cinderella(`Marta`, 23, 32);
let cin6 = new Cinderella(`Karina`, 24, 33.5);
let cin7 = new Cinderella(`Tanya`, 25, 35.5);
let cin8 = new Cinderella(`Liza`, 26, 37.5);
let cin9 = new Cinderella(`Zinaida`, 40, 38);
let cin10 = new Cinderella(`Masha`, 18, 37);

const cinArr = [cin1, cin2, cin3, cin4, cin5, cin6, cin7, cin8, cin9, cin10];

class Prince {
    constructor(name, age, foundShoe) {
        this.Name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

    findCinderella(arrayOfCinderellas) {
        for (const cinderella of arrayOfCinderellas) {
            if (cinderella.footSize === ivan.foundShoe) {
                return cinderella;
            }

        }

    }
}

let ivan = new Prince(`Ivan`, 25, 35);
// console.log(ivan.findCinderella(cinArr));











