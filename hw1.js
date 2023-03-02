<<<<<<< HEAD
//   дан массив каких то чисел. написать функцию getPow(arr)
//    которая вернет новый массив из квадратов этих чисел. кважрат - это 2 ** 2, то есть 2 в степени 2
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getPow(arr) {
    return arr.map((item) => {
        return item ** 2
    })
}
console.log(getPow(digits))

// let users = [ vasya, petya, masha ];
// отфильтровать и оставить только тех пользователей возраст которых больше 27

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ]
function oldPeople(arr) {
   return arr.filter((item) => {
        return item.age > 27
    })
}
console.log(oldPeople(users))

// дан массив строк разных длин, отфильтровать и оставить только те длина у которых больше 5 символов

let strings = ["строка", "string", "long string", "cat", "very long string"]
function giveStrings(arr) {
   return arr.filter((item) => {
        if (item.length > 5) {
            return item 
        }
    })
}
console.log(giveStrings(strings))

// сделать функцию которая вовращает строчку задом наперед
//  reverseStr(str) ('карина'=>'анирак') пригодится split reverse и join

function reverseStr(str) {
    let arr = str.split("")
    let arrRev = arr.reverse()
    return arrRev.join("")
}
let string = "карина"
console.log(reverseStr(string))

// Напишите функцию, которая принимает на вход следующие данные:
// И возвращает массив строк:  * Используем: map*/

const arr = [
    { name: "shark", likes: "ocean" },
    { name: "turtle", likes: "pond" },
    { name: "otter", likes: "fish biscuits" },
];
// ['shark likes ocean', 'turtle likes pond','otter likes fish biscuits']
function environment(arr) {
  return arr.map((item) => {
      return item.name + " likes " + item.likes 
    })
}

console.log(environment(arr))
const sum = digits.reduce((newArr, item) => { //похоже на map, но первым мы указываем новую перемнную,
//которую будем изменять, и он так же пройдётся по всем элементам массива
    if (item %2 !== 0) {
        newArr.push(item)
    }
    return newArr
},[])
console.log(sum)
// Напишите функцию, которая принимает на вход данные из корзины в следующем виде
// где price это цена товара, а count количество Функция должна вернуть итоговую сумму
// по данному заказу.Используем: reduce
// */

const cart = [
    { price: 10, count: 2 },
    { price: 100, count: 1 },
    { price: 2, count: 5 },
    { price: 15, count: 6 },
];
function itog(arr) {
   return arr.reduce((sum, item) => {
        return sum + item.price * item.count  
    } ,0)
}
console.log(itog(cart))
// Реализовать функцию, на входе которой массив чисел, на выходе массив уникальных
//  значений Используем: reduce и indexOf*/

const numb = [1, 2, 2, 4, 5, 5];

function orig(arr) {
   return arr.reduce((newArr, item) => {
        if (newArr.includes(item)) {
            return newArr
        } else {
            newArr.push(item)
            return newArr
        }
    },[])
}
console.log(orig(numb))
// Напишите функцию, которая возвращает 2 наименьших значение массива
// [4,3,2,1] => [1,2] Используем: .sort()
function min2(arr) {
    let newArr = arr.sort()
    return [newArr[0], newArr[1]]
}
console.log(min2(numb))
// Реализовать функцию, на входе которой объект следующего вида:на выходе строка с сообщением 
//'ФИО: Петр Иванович Васильев' *!/

const man = {
    firstName: "Петр",
    secondName: "Васильев",
    patronymic: "Иванович",
};
function fio(obj) {
    let str = "ФИО: "
    for (let key in obj) {
        str += obj[key] + " "
    }
    return str
}
console.log(fio(man))

// Реализовать функцию, которая принимает на вход 2 аргумента: массив чисел и множитель,
// а возвращает массив исходный массив, каждый элемент которого был умножен на множитель:
// [1,2,3,4], 5 => [5,10,15,20]
// Используем: map*/
function multiply(arr, multiplyer) {
    return arr.map((item) => {
        return item * multiplyer
    })
}
console.log(multiply(numb, 5))
// Реализовать функцию, которая принимает на вход 2 аргумента: массив и франшизу,
// а возвращает строку с именнами героев разделенных запятой:

// Marvel => Ironman, Thor
// Используем: filter, map, join
const heroes = [
    { name: "Batman", franchise: "DC" },
    { name: "Ironman", franchise: "Marvel" },
    { name: "Thor", franchise: "Marvel" },
    { name: "Superman", franchise: "DC" },
];
function characters(arr, franchise1) {
     let correct = arr.filter((item) => {
         return item.franchise == franchise1
     })
     let newCorrect = correct.map((item) => {
        return item.name
     })
    return newCorrect.join(",")
}
console.log(characters(heroes, "DC"))
=======
//   дан массив каких то чисел. написать функцию getPow(arr)
//    которая вернет новый массив из квадратов этих чисел. кважрат - это 2 ** 2, то есть 2 в степени 2
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getPow(arr) {
    return arr.map((item) => {
        return item ** 2
    })
}
console.log(getPow(digits))

// let users = [ vasya, petya, masha ];
// отфильтровать и оставить только тех пользователей возраст которых больше 27

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ]
function oldPeople(arr) {
   return arr.filter((item) => {
        return item.age > 27
    })
}
console.log(oldPeople(users))

// дан массив строк разных длин, отфильтровать и оставить только те длина у которых больше 5 символов

let strings = ["строка", "string", "long string", "cat", "very long string"]
function giveStrings(arr) {
   return arr.filter((item) => {
        if (item.length > 5) {
            return item 
        }
    })
}
console.log(giveStrings(strings))

// сделать функцию которая вовращает строчку задом наперед
//  reverseStr(str) ('карина'=>'анирак') пригодится split reverse и join

function reverseStr(str) {
    let arr = str.split("")
    let arrRev = arr.reverse()
    return arrRev.join("")
}
let string = "карина"
console.log(reverseStr(string))

// Напишите функцию, которая принимает на вход следующие данные:
// И возвращает массив строк:  * Используем: map*/

const arr = [
    { name: "shark", likes: "ocean" },
    { name: "turtle", likes: "pond" },
    { name: "otter", likes: "fish biscuits" },
];
// ['shark likes ocean', 'turtle likes pond','otter likes fish biscuits']
function environment(arr) {
  return arr.map((item) => {
      return item.name + " likes " + item.likes 
    })
}

console.log(environment(arr))
const sum = digits.reduce((newArr, item) => { //похоже на map, но первым мы указываем новую перемнную,
//которую будем изменять, и он так же пройдётся по всем элементам массива
    if (item %2 !== 0) {
        newArr.push(item)
    }
    return newArr
},[])
console.log(sum)
// Напишите функцию, которая принимает на вход данные из корзины в следующем виде
// где price это цена товара, а count количество Функция должна вернуть итоговую сумму
// по данному заказу.Используем: reduce
// */

const cart = [
    { price: 10, count: 2 },
    { price: 100, count: 1 },
    { price: 2, count: 5 },
    { price: 15, count: 6 },
];
function itog(arr) {
   return arr.reduce((sum, item) => {
        return sum + item.price * item.count  
    } ,0)
}
console.log(itog(cart))
// Реализовать функцию, на входе которой массив чисел, на выходе массив уникальных
//  значений Используем: reduce и indexOf*/

const numb = [1, 2, 2, 4, 5, 5];

function orig(arr) {
   return arr.reduce((newArr, item) => {
        if (newArr.includes(item)) {
            return newArr
        } else {
            newArr.push(item)
            return newArr
        }
    },[])
}
console.log(orig(numb))
// Напишите функцию, которая возвращает 2 наименьших значение массива
// [4,3,2,1] => [1,2] Используем: .sort()
function min2(arr) {
    let newArr = arr.sort()
    return [newArr[0], newArr[1]]
}
console.log(min2(numb))
// Реализовать функцию, на входе которой объект следующего вида:на выходе строка с сообщением 
//'ФИО: Петр Иванович Васильев' *!/

const man = {
    firstName: "Петр",
    secondName: "Васильев",
    patronymic: "Иванович",
};
function fio(obj) {
    let str = "ФИО: "
    for (let key in obj) {
        str += obj[key] + " "
    }
    return str
}
console.log(fio(man))

// Реализовать функцию, которая принимает на вход 2 аргумента: массив чисел и множитель,
// а возвращает массив исходный массив, каждый элемент которого был умножен на множитель:
// [1,2,3,4], 5 => [5,10,15,20]
// Используем: map*/
function multiply(arr, multiplyer) {
    return arr.map((item) => {
        return item * multiplyer
    })
}
console.log(multiply(numb, 5))
// Реализовать функцию, которая принимает на вход 2 аргумента: массив и франшизу,
// а возвращает строку с именнами героев разделенных запятой:

// Marvel => Ironman, Thor
// Используем: filter, map, join
const heroes = [
    { name: "Batman", franchise: "DC" },
    { name: "Ironman", franchise: "Marvel" },
    { name: "Thor", franchise: "Marvel" },
    { name: "Superman", franchise: "DC" },
];
function characters(arr, franchise1) {
     let correct = arr.filter((item) => {
         return item.franchise == franchise1
     })
     let newCorrect = correct.map((item) => {
        return item.name
     })
    return newCorrect.join(",")
}
console.log(characters(heroes, "DC"))
>>>>>>> c75968bf4b2a274d4a966a13c1b38ddd8ea368c6
