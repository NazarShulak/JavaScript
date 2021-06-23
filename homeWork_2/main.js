// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let numericArr = [1, 456, 0.004, -3435, 0]
// let strArr = ['One', 'Alpha', 'False', 'Sun', '126']
// let mixedArr = [111, true, 'Okten', '0,001', -256]
//
// console.log(numericArr, strArr, mixedArr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let emptyArr = [];
// emptyArr[0] = 'ZERO';
// emptyArr[1] = false;
// emptyArr[2] = -0.628;
// emptyArr[3] = null;
// emptyArr[30] = 'smile';
//
// console.log(emptyArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.</div>', i)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>', i);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = ['alpha', 'pi', '256', 'string', 'end', 'true', 'sun', 'smile', 'zero'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array = ['alpha', 'pi', 256, -0.006, true, false, BigInt(439579436653734), 'smile', null, undefined];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки рядкові, числові, булеві елементи
//
// let array = ['alpha', 'pi', 256, -0.006, true, false, 1024, 'smile', false, 0];
// for (let i = 0; i < array.length; i++) {
//     let type = typeof array[i];
//     // if (type === "boolean") {
//     //     console.log(array[i]);
//     // }
//     // if (type === "number") {
//     //     console.log(array[i]);
//     // }
//     if (type === "string") {
//         console.log(array[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let emptyArr = [];
// emptyArr[0] = 'ZERO';
// emptyArr[1] = false;
// emptyArr[2] = -0.628;
// emptyArr[3] = null;
// emptyArr[4] = 234;
// emptyArr[5] = -0.09;
// emptyArr[6] = true;
// emptyArr[7] = 'String';
// emptyArr[8] = 'Boooo';
// emptyArr[9] = 25;
//
// for (let i = 0; i < emptyArr.length; i++) {
//     console.log(emptyArr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
//
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i)
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         if (i === 2 && j === 1) {
//             break
//         }
//         console.log('min: ', i, ' sec: ', j);
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         if (j === 21) {
//             break
//         }
//         for (let k = 0; k < 60; k++) {
//             if (j === 20 && k === 1) {
//                 break
//             }
//             console.log('hr:', i, 'min:', j, 'sec:', k)
//         }
//     }
// }
// =================================================================
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let firsArr = ['a', 'b', 'c'];
// let secondArr = [1, 2, 3];
//
// for (let i = 0; i < secondArr.length; i++) {
//     firsArr.push(secondArr[i]);
// }
// console.log(firsArr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     newArr.unshift(arr[i]);
// }
// console.log(newArr);

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
//
// for (let i = 0; i < 3; i++) {
//     arr.push(i + 4);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
//
// for (let i = 0; i < 3; i++) {
//     arr.unshift(i + 4);
// }
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let arr = ['js', 'css', 'jq'];
// let firstItem = arr.shift();
// console.log(firstItem);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// let lastItem = arr.pop();
// console.log(lastItem);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < 3; i++) {
//     arr.shift();
// }
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < 3; i++) {
//     arr.pop();
// }
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let firstArr = [1, 2, 3, 4, 5];
// let secondArr = ['a', 'b', 'c'];
// let tempArr = [];
//
// for (let i = 0; i < 2; i++) {
//     tempArr[i] = firstArr.pop();
// }
// for (let i = 0; i < secondArr.length; i++) {
//     firstArr.push(secondArr[i]);
// }
// for (let i = 0; i < tempArr.length; i++) {
//     firstArr.push(tempArr[i]);
// }
// tempArr = delete;
// console.log(firstArr);

// Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let firstArr = [1, 2, 3, 4, 5];
// let secondArr = ['a', 'b', 'c', 'e'];
// let tempArr = [];
//
// secondArr.unshift(firstArr[0]);
// firstArr.shift();
// tempArr[0] = firstArr.pop();
// tempArr[1] = secondArr.pop();
// tempArr[2] = secondArr.pop();
// for (let i = 0; i < 3; i++) {
//     secondArr.push(firstArr[i]);
// }
// secondArr.push(tempArr.pop());
// secondArr.push(tempArr.shift());
// secondArr.push(tempArr.shift());
//
// console.log(secondArr);

// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [12, 67, 34, 25, 0, 13, 42, -5, -8, 85];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let myArr = [12, 67, 34, 25, 0, 13, 42, -5, -8, 85];
// let targetArr = [];
//
// for (let i = 0; i < myArr.length; i++) {
//     targetArr.push(myArr[i]);
// }
// console.log(targetArr);

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший
// let myArr = [12, 67, 34, 25, 0, 13, 42, -5, -8, 85];
// let targetArr = [];
//
// for (let i = 0; i < myArr.length; i++) {
//     targetArr[i] = myArr[i];
// }
// console.log(targetArr);

// ===============================
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// 1.перебрати його циклом while
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0;
// while (i < myArr.length) {
//     console.log(myArr[i]);
//     i++;
// }

// 2.перебрати його циклом for
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0;
// while (i < myArr.length) {
//     if (i % 2 !== 0) {
//         console.log(myArr[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < myArr.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(myArr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0;
// while (i < myArr.length) {
//     if (myArr[i] % 2 === 0) {
//         console.log(myArr[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 2 === 0) {
//         console.log(myArr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 3 === 0) {
//         myArr[i] = 'okten';
//     }
//     console.log(myArr[i]);
// }

// 8. вивести масив в зворотньому порядку.
// let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = myArr.length-1; i >= 0; i--) {
//     console.log(myArr[i]);
// }

// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
//
// for (let i = 0; i <= 50; i++) {
//     let temp = i;
//     if (temp % 2 !== 0) {
//         temp = temp * 2;
//     }
//     arr[i] = temp;
//     console.log(arr[i], i);
// }

// створити пустий масив та :
// заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
//
// for (let i = 0; i <= 50; i++) {
//     let temp = i;
//     if (temp % 2 === 0) {
//         temp -= 1;
//     }
//     arr[i] = temp;
//     console.log(arr[i], i);
// }

// Створити пустий масив та :
// Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
//
// for (let i = 0; i <= 20; i++) {
//     arr[i] = Math.round(Math.random() * 100);
//     console.log(arr[i], i);
// }

// Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
//
// for (let i = 0; i <= 20; i++) {
//     arr[i] = Math.round((Math.random() * 732) + 8);
//     console.log(arr[i], i);
// }

// Вивести за допомогою console.log кожен третій елемен
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 2; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }

// Вивести за допомогою console.log кожен третій елементільки якщо цей елемент є парним.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let newArr = [];
//
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// Вивести кожен елемент масиву, сусід справа якого є парним
// let arr = [1, 2, 34, 45, 23, 89, 44, 24, 11, 10, 5];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let priceList = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//
// for (let i = 0; i < priceList.length; i++) {
//     sum += priceList[i] / priceList.length;
// }
// console.log(Math.round(sum));
//

// Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let firstArr = [];
// let secondArr = [];
//
// for (let i = 0; i < 20; i++) {
//     firstArr[i] = Math.round(Math.random() * 100);
//     secondArr[i] = 5 * firstArr[i];
// }
// console.log(firstArr);
// console.log(secondArr);

// Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let myArr = ['string', 123, null, 12, 'smile', 'second', true, 0.001, -386];
// let resArr = [];
//
// for (let i = 0; i < myArr.length; i++) {
//     if (typeof myArr[i] === "number") {
//         resArr.push(myArr[i]);
//     }
// }
// console.log(resArr)
