// 1) Створити масив з 20 чисел та:
const array = [1, 23, 12, 43, 0, -2, 1, -12, 45, 100, 56, 43, 1, 3, 6, 111, 0, 37, 51, 68]
//  a) відсортувати його від меншого до більшого.
let sortedArrAscend = array.sort((a, b) => a - b);
// console.log(sortedArrAscend);

//  b) відсортувати його від більшого до меншого.
let sortedArrDescend = array.sort((a, b) => b - a);
// console.log(sortedArrDescend);

//  c) В
//  ідфілтрувати числа які є кратними 3.
let numsAliquotTo3 = array.filter(num => num % 3 === 0);
// console.log(numsAliquotTo3);

//  d) Відфілтрувати числа які є більшими за 10.
let numsLargerTen = array.filter(number => number > 10);
// console.log(numsLargerTen);

//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// array.forEach(number => document.write(`${number}`));

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
let numsMultiply3 = array.map(number => number * 3);
// console.log(numsMultiply3);

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
let sumOfNums = array.reduce((acc, currentValue) => acc + currentValue);
// console.log(sumOfNums);

// 2) Створити масив з 20 стрічок та:
const arr = [`sun`, `day`, `js`, `table`, `monkey`, `smile`, `apple`, `money`, `food`, `name`, `laptop`,
    `bottle`, `water`, `ball`, `end`, `button`, `sponge`, `bob`, `square`, `pants`];

//  a) Відсортувати його в алфавітному порядку
// let sortedArr = arr.sort();
// console.log(sortedArr);

//  b) Відсортувати в зворотньому порядку
let sortedReverseArr = arr.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    return -1;
});
// console.log(sortedReverseArr);

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let strLenGraterThan4 = arr.filter((string) => string.length > 4);
// console.log(strLenGraterThan4);

//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let samSaysString = arr.map(string => `Sam says ${string}`);
// console.log(samSaysString);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

let sortedAgeAscend = users.sort((a, b) => a.age - b.age);
// console.log(sortedAgeAscend);
let sortedAgeDescend = users.sort((a, b) => b.age - a.age);
// console.log(sortedAgeDescend);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortedLenOfEachNameDescend = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sortedLenOfEachNameDescend);

let sortedLenOfEachNameAscend = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sortedLenOfEachNameAscend);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
let addedId = users.map((value, index) => {
    return {id: index + 1, name: value.name, age: value.age, isMarried: value.isMarried};
});
// console.log(addedId);
// console.log(users)

// d) відсортувати його за індентифікатором

let sortIdUsers = addedId.sort((a, b) => b.id - a.id);
// console.log(sortIdUsers);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

let addingFlatIfMarried = users.reduce((acc, user) => {
    if (user.isMarried) {
        user.flat = true;
        acc.push(user)

    }
    return acc;
}, []);


//
// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];
//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let volumeGraterThan3 = cars.filter(value => value.volume > 3);
// console.log(volumeGraterThan3);

// - двигун = 2л
let volumeIsEqualTo2 = cars.filter(value => value.volume === 2);
// console.log(volumeIsEqualTo2);

// - виробник мерс
let producerIsMercedes = cars.filter(value => value.producer === `mercedes`);
// console.log(producerIsMercedes);


// - двигун більше 3х літрів + виробник мерседес
let producerIsMercedesWithVolume3 = cars.filter(value => (value.producer === `mercedes`) && (value.volume === 3));
// console.log(producerIsMercedesWithVolume3);

// - двигун більше 3х літрів + виробник субару
let producerSubaruVolume3AndMore = cars.filter(value => (value.producer === `subaru`) && (value.volume >= 3));
// console.log(producerSubaruVolume3AndMore);

// - сили більше ніж 300
let morePowerThan300 = cars.filter(value => value.power > 300);
// console.log(morePowerThan300);

// - сили більше ніж 300 + виробник субару
let producerSubaruPowerMore300 = cars.filter(value => (value.power > 300) && (value.producer === `subaru`));
// console.log(producerSubaruPowerMore300);

// - мотор серіі ej
let ejEngine = cars.filter(car => car.engine.startsWith(`ej`));
// console.log(ejEngine);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let ejEngineSubaruPowerMore300 = cars.filter(car => (car.engine.startsWith(`ej`)) && (car.producer === `subaru`) && (car.power > 300))
// console.log(ejEngineSubaruPowerMore300);

// - двигун меньше 3х літрів + виробник мерседес
let volumeLess3Mercedes = cars.filter(car => (car.volume < 3) && (car.producer === `mercedes`));
// console.log(volumeLess3Mercedes);

// - двигун більше 2л + сили більше 250

let engineMore2PowerMore250 = cars.filter(car => (car.volume > 2) && (car.power > 250));
// console.log(engineMore2PowerMore250);

// - сили більше 250  + виробник бмв
let powerMore250ProducerBMW = cars.filter(car => (car.power > 250) && (car.producer === `bmw`));
// console.log(powerMore250ProducerBMW);

//
//
// - взять слдующий массив
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
//
// -- Відсортувати їх по ID
let sortedIdUsersAscend = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortedIdUsers);

// -- Відсортувати їх по ID в зворотньому порядку
let sortedIdUsersDescend = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sortedIdUsersDescend);

// -- Відсортувати по віку
let sortedUsersByAgeAscend = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortedUsersByAgeAscend);


// -- Відсортувати по віку в зворотньому порядку
let sortedUsersByAgeDescend = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sortedUsersByAgeDescend);

// -- Відсорутвати по імені
let sortedUsersByName = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) return 1;
    return -1;
});
// console.log(sortedUsersByName);

// -- Відсорутвати по назві вулиці
let sortedByStreet = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) return 1;
    return -1;
});
// console.log(sortedByStreet);

// -- Відсорутвати по номеру будинку
let sortedByHouseNumber = usersWithAddress.sort((a, b) => {
    if (a.address.number > b.address.number) return 1;
    return -1;
});
// console.log(sortedByHouseNumber);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

let youngerThan30 = usersWithAddress.filter(user => user.age < 30);
// console.log(youngerThan30);

// -- Залишити тільки одружених
let onlyMarriedUsers = usersWithAddress.filter(user => user.isMarried);
// console.log(onlyMarriedUsers);

// -- Залишити тільки одружених, які молодні за 30
let marriedYoungerThan30 = usersWithAddress.filter(user => (user.isMarried) && (user.age < 30));
// console.log(marriedYoungerThan30);

// -- Залишити лише тих, в кого парні номери будинків.
let houseNumberIsBin = usersWithAddress.filter(user => user.address.number % 2 === 0);
// console.log(houseNumberIsBin);

// -- Порахувати загальний вік всіх людей. (reduce)
let wholeUsersAge = usersWithAddress.reduce((acc, user) => acc + user.age, 0);
// console.log(wholeUsersAge);


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let hasChild = usersWithAddress.reduce((acc, user) => {
    if ((user.isMarried) && (user.age > 30)) {
        user.child = true;
        acc.push(user);
    }
    return acc;
}, []);
// console.log(hasChild);


// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
let defaultOwner = {name: `ivan`, age: 43, experience: 25};

class Car {
    constructor(model, power, price, year) {
        this.model = model;
        this.power = power;
        this.owner = defaultOwner;
        this.price = price;
        this.year = year;
    }

    changeOwner(name, age, experience) {
        this.owner = {name, age, experience};
    }

    fixCar() {
        this.power += this.power / 10;
    }

    gainExperience() {
        this.owner.experience += 1;
    }
}

let carsArr = [audi = new Car(`a7`, 300, 5000, 2020),
    audi2 = new Car(`q5`, 320, 2000, 2018),
    bmw = new Car(`m5`, 300, 3700, 2011),
    opel = new Car(`b7`, 180, 1000, 2010),
    lada = new Car(`9`, 190, 1000, 2005),
    tesla = new Car(`e1`, 230, 4000, 2021),
    prius = new Car(`pr`, 280, 3800, 2019)
]

// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
audi2.fixCar();
audi.fixCar();
opel.fixCar();
prius.fixCar();

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
audi2.changeOwner(`Oleg`, 25, 5);
opel.changeOwner(`Ira`, 27, 9);
prius.changeOwner(`Taras`, 40, 4);
audi.changeOwner(`Vika`, 22, 3);


// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
carsArr.map((value, index) => {
    if (index % 2 !== 0) {
        value.power += value.power / 10;
        value.price += value.price / 20;
    }
})
// console.log(carsArr)
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
let checkIfInexperienced = carsArr.forEach(value => {
    if ((value.owner.experience < 5) && (value.owner.age > 25)) {
        value.gainExperience();
    }
})


// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let averagePrice = carsArr.reduce((acc, currentValue) => acc + currentValue.price, 0)
// console.log(averagePrice)


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
const Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9];

function getMinMaxIndexesOfValue(arr, num) {
    let indexArr = [];
    arr.forEach((value, index) => {
        if (value === num) indexArr.push(index);
    });

    let min = indexArr[0];
    let max = indexArr[indexArr.length - 1];
    return `min index: ${min} max index: ${max}`;
}

// console.log(getMinMaxIndexesOfValue(Arr, 4));
