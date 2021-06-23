// 1) створити функцію яка приймає масив та виводить його
//
let arr = [1, 2, 4, 5, 6, 7, 8, 9]

function myFunc(x) {
    return console.log(x);
}

// myFunc(arr)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
function randNum(size) {
    let randArr = [];
    for (let i = 0; i < size; i++) {
        let randNum = Math.round(Math.random() * 100);
        randArr.push(randNum);
    }
    return randArr;
}

// myFunc(randNum(10))

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNum(x, y, z) {
//     if (x < y && x < z) {
//         return x;
//     }
//     if (z < x && z <y) {
//         return z;
//     }
//     if (y<x && y < z) {
//         return y;
//     }
// }
// console.log(minNum(200, 0, -9));

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
function minNum(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    if (y > x && y > z) {
        return y;
    }
    if (z > x && z > y) {
        return z;
    }
}

// console.log(minNum(-200, 0, 9));

// 5) створити функцію яка повертає найбільше число з масиву
//
// let array = [1, 4, 77, -98, 0, 60, 6];

function maxFromArr(array) {
    let maxNumber = [0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    console.log(maxNumber);
}

// maxFromArr(array)


// 6) створити функцію яка повертає найменьше число з масиву
//
let array = [1, 4, 77, -78, 0, 60, 6];

function minFromArr(array) {
    let minNumber = [0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    console.log(minNumber);
}


// minFromArr(array);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let array = [1, 4, 77, -98, 0, 60, 6];
//
function numSumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// console.log(numSumArr(array));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//[1, 4, 77, -98, 0, 60, 6]
//
function numAverageSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] / array.length;
    }
    return sum;
}

// console.log(numSumArr(array));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
let someObjArr = [{name: 'Dima', age: 13}, {model: 'Camry', color: 'green'}, {price: '5000'}]

function objectArr(array) {
    let keyArr = [];
    for (let i = 0; i < array.length; i++) {
        for (const arrayKey in array[i]) {
            keyArr.push(arrayKey);
        }
    }
    return keyArr;
}

// console.log(objectArr(someObjArr));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//
function objectValuesArr(array) {
    let valueArr = [];
    for (let item of array) {
        for (let key in item) {
            valueArr.push(item[key]);
        }
    }
    return valueArr;
}

// console.log(objectValuesArr(someObjArr));

//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
let first = [1, 2, 4, 5, 6];
let second = [3, 6, 8, 1, 0];

function addingElem(array1, array2) {
    let newArr = [];

    for (const i in array1) {
        for (const j in array2) {
            if (i === j) {
                newArr.push(array1[i] + array2[j])
            }
        }
    }
    return newArr;
}

// console.log(addingElem(first, second));

// =============================================================
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
function noName(N) {
    let array = [];

    for (let i = 0; i < N; i++) {
        let num = prompt(`Enter a number`);
        array.push(num);
    }
    array.sort(function (a, b) {
        return b - a
    });
    console.log(`max: ${array[0]}`)
    return array[array.length - 1];
}

// console.log(`min: ${noName(5)}`);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
//
let sampleArr = [{name: 'Dima', age: 13}, {model: 'Camry', color: 'green'}, {price: '5000'}]

function combined(array) {
    let choice = parseInt(prompt(`Enter 1 for values else you get keys`))
    let keyArr = [];
    let valueArr = [];

    if (choice === 1) {
        for (let item of array) {
            for (let key in item) {
                valueArr.push(item[key]);
            }
        }
        return console.log(valueArr);
    }
    for (let i = 0; i < array.length; i++) {
        for (const arrayKey in array[i]) {
            keyArr.push(arrayKey);
        }
    }

    return console.log(keyArr);

}

// combined(sampleArr)

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
let exampleArr = [1, 4, 77, -98, 0, 60, 6];

function change(index, array) {

    for (let i = 0; i < array.length; i++) {
        if (index === i) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return array;
}

// console.log(change(3, exampleArr));

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//
let arrWithZeroes = [1, 4, 0, 77, -98, 0, 60, 6, 0, 0, 6, 7, 8, 0, -1];

function putZeroAtEnd(array) {

    for (let i = array.length; i >= 0; i--) {
        if (array[i] === 0) {
            let splicedZero = array.splice(i, 1);
            array.push(splicedZero[0]);
        }
    }
    return array;
}

// console.log(putZeroAtEnd([0, 0, 8, 0, 0, 0, 0, 8, 9, 0, 1, 0]));

// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '

function normalise(str) {
    let resultString = [];
    str = str.trim();
    let zeroIndexArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 32) {
            zeroIndexArr.push(i);
        }
    }

    let slicedFirst = str.slice(0, zeroIndexArr[0]);
    let slicedSecond = str.slice(zeroIndexArr.length + slicedFirst.length, str.length);

    resultString = `${slicedFirst} ${slicedSecond}`;
    return resultString;
}

// console.log(normalise(n3));

//Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function writeHelloOwu() {
    let div = document.createElement('div');
    div.innerText = 'Hello owu';
    document.body.appendChild(div);
}

// writeHelloOwu()

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addTagWithSomeText(tag, text) {
    let someTag = document.createElement(tag);
    someTag.innerText = text;
    document.body.appendChild(someTag);
}

// addTagWithSomeText(`p`,`lorem`)

















