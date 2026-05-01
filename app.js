//  // БАзовые арифметические операции
// const weight = 10;
// const height = 20;
// const space = weight * height;
// const newWeight = weight + 5;
// const division = height / weight;
// const volume = space ** 2;
// console.log(space);
// console.log(newWeight);
// console.log(division);
// console.log(volume);

// // строки
// const name = "Ali";
// const surname = "Mamedov";

// // Присваивание строк
// let age = 20+12;
// age +=2;
// console.log(age);

// // операторы сравнения
// const isAdult = 18;
// console.log(isAdult >= 18);

// // Порядок выполнения операций
// const result = isAdult -2 > volume / 2;
// console.log(result);

// //Группировка операций
// const a = (5 + 6) /2;
// console.log(a);

// //присваивание
// let c;
// let d;
// c = d = 5 + 3;
// console.log(c);
// console.log(d);

// // Типы  данных

// let a = 5;
// let b = 5.6;
// console.log(typeof a);
// a = "Строка";
// console.log(typeof a);
// let isAdmin = false;
// console.log(typeof isAdmin)
// let c;
// console.log(typeof c);
// c =5;
// console.log(typeof c);
// let d = null;
// console.log(typeof   d== null );

// const money = 80;
// const workTime = 40;
// const workDays = 9;
// const result =  workTime <= workDays * 5;
// const allMoney = workTime  * money  ;
// console.log(result)
// console.log( allMoney);

// Шаблонные строки

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Вася Пупкин';

const template = author + " Заказл " + projectName + " по цене " + price
console.log(template)

const template2 = `${author} заказал ${projectName} по цене ${price}`
console.log(template2)

const template3 = 'Проект \n' + 'Цена: ' + price + '$'
console.log(template3)

const template4 = `Проект 
Цена: ${price}$ `
console.log(template4)