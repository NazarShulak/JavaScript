// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
//
// let num_1 = 1;
// let num_2 = 10;
// let num_3 = -999;
// let num_4 = 123;
// let num_5 = 3.14;
// let num_6 = 2.7;
// let num_7 = 16;
//
// let bool_1 = true;
// let bool_2 = false;
//
// console.log(hello, owu, com, ua)
// alert(hello)
// alert(owu)
// alert(com)
// alert(ua)
// document.write(hello, owu, com, ua)
// console.log(num_1, num_2, num_3, num_4, num_5, num_6, num_7, bool_1, bool_2)
// document.write(num_1, num_2, num_3, num_4, num_5, num_6, num_7, bool_1, bool_2)
// alert(num_1)
// alert(num_2)
// alert(num_3)
// alert(num_4)
// alert(num_5)
// alert(num_6)
// alert(num_7)
// alert(bool_1)
// alert(bool_2)

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// hello = 'Hi';
// owu = 'Owu';
// com = 'COM';
// ua = 'UA';
//
// num_1 = 100;
// num_2 = -56;
// num_3 = 0.01;
// num_4 = 6.28;
// num_5 = 65678;
// num_6 = -0.0000045;
// num_7 = 0;
//
// bool_1 = false;
// bool_2 = true;
//
// console.log(hello, owu, com, ua)
// alert(hello)
// alert(owu)
// alert(com)
// alert(ua)
// document.write(hello, owu, com, ua)
// console.log(num_1, num_2, num_3, num_4, num_5, num_6, num_7, bool_1, bool_2)
// document.write(num_1, num_2, num_3, num_4, num_5, num_6, num_7, bool_1, bool_2)
// alert(num_1)
// alert(num_2)
// alert(num_3)
// alert(num_4)
// alert(num_5)
// alert(num_6)
// alert(num_7)
// alert(bool_1)
// alert(bool_2)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// const name = prompt('What is your name?')
// const surName = prompt('What is your surName?')
// const age = prompt('How old are you?')
//
// console.log('Hello', name, surName, '. You are', age, 'years old.')

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація)
//
// const concat = name + surName + age;
// console.log(concat)
//

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let firstNum = prompt('Enter number');
// let secondNum = prompt('Enter number');
// let thirdNum = prompt('Enter number');
//
// firstNum = +firstNum;
// secondNum = +secondNum;
// thirdNum = +thirdNum;
//
// console.log(firstNum)
// console.log(secondNum)
// console.log(thirdNum)

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt. Додати їх всі мож собою і результат вивести в консоль.
// let firstNum = prompt('Enter number');
// let secondNum = prompt('Enter number');
// let thirdNum = prompt('Enter number');
// let fourthNum = prompt('Enter number');
//
// let firstNumToInt = parseInt(firstNum,10)
// let secondNumToInt = parseInt(secondNum,10)
// let thirdNumToInt = parseInt(thirdNum,10)
// let fourthNumToInt = parseInt(fourthNum,10)
//
// let sum = firstNumToInt + secondNumToInt + thirdNumToInt + fourthNumToInt;
// console.log(sum)

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let firstNum = prompt('Enter number');
// let secondNum = prompt('Enter number');
// let thirdNum = prompt('Enter number');
//
// let firstNumToFloat = parseFloat(firstNum)
// let secondNumToFloat = parseFloat(secondNum)
// let thirdNumToFloat = parseFloat(thirdNum)
//
// let result = firstNumToFloat + secondNumToFloat + thirdNumToFloat;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let firstNum = prompt('Enter number');
// let secondNum = prompt('Enter number');
// let thirdNum = prompt('Enter number');
//
// let firstNumToFloat = parseFloat(firstNum)
// let secondNumToFloat = parseFloat(secondNum)
// let thirdNumToFloat = parseFloat(thirdNum)
//
// let firstRounded = Math.round(firstNumToFloat)
// let secondRounded = Math.round(secondNumToFloat)
// let thirdRounded = Math.round(thirdNumToFloat)
//
// let result = firstRounded + secondRounded + thirdRounded;
// console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// let first = parseInt(prompt('Enter number'),10);
// let second = parseInt(prompt('Enter number'),10);
//
// let result = Math.pow(first,second);
// console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//
// console.log(5 < 6);
// console.log(5 === 6);
// console.log(5 > 6);
// console.log(5 >= 6);
//
// console.log(10 === 10);
// console.log(10 <= 10);
// console.log(10 !== 10);
// console.log(10 < 10);
// console.log(10 > 10);
//
// console.log(123 === '123');
// console.log(123 == '123');





