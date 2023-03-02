<<<<<<< HEAD
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася"
// function ucFirst(str) {
//     let newStr = ""
//     for (let i = 0; i < str.length; i++ ) {
//         if (i == 0) {   
//          newStr += str[0].toUpperCase()
//         } else {
//         newStr += str[i]
//         }
//     }
//     return newStr
// }
// console.log(ucFirst("линия"))
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX',
// а иначе false.
// function checkSpam(str) {
//     newStr = str.toLowerCase() 
//     if (newStr.includes("viagra") || newStr.includes("xxx")) {
//         return true
//     } else {
//         return false
//     }
// }
// let a = "бла бла Viagra бла"
// console.log(checkSpam(a))
let b = "Меня зовут Александр. Мне 21 год"
console.log(b.slice(4, 10)) //позволяет вырезать кусок строки между определённых индексов
function ucFirst(str) {
    let newStr = ""
    newStr = str[0].toUpperCase()
    newStr += str.slice(1)
    return newStr
}
console.log(ucFirst("строка"))
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"
function trumcate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = str.slice(0, maxlength) + "..."
        return newStr
    } else {
        return str
    }
}
console.log(trumcate("Ghbtn", 20))
//extractCurrencyValue('$120') === 120
function extractCurrencyValue(val) {
    newVal = val.slice(1)
    return +newVal //плюсик в этой записи делает из строки число
}
console.log(extractCurrencyValue('$120') === 120)
let c = ["apple",
"banana",
"watermelon"
]
//push - добавить в конец
//pop - удалить из конца
//shift - удалить из начала
//unshift - добавить в начало
let numbers = [1, 2, 3, 4, 5, 6, 7]
function getOdd(numbers) {
    let oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] %2 == 0) {
            oddNumbers.push(numbers[i])
        }
    }
   return oddNumbers
}
console.log(getOdd(numbers))
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
    let e = []
    while (true) {
        let d = prompt("Введите число")
        if (d == null || d == "") {
            break
        } else {
            e.push(+d)
        }
    }
    let sum = 0
    for (let i = 0; i < e.length; i++) {
        sum += e[i]
    }
    return sum
}
console.log(sumInput())
let fruits = ["apple",
"banana",
"watermelon",
"apple"
]
fruits.splice(0, 0, "melon", "strawberries") //удаляет эелемнты массива и может их заменить на новые
let yes = fruits.slice(0, 2) //копирует в себя элементы массива. первое число - это индекс первого 
//элемента, а второе число это кол-во элементов
console.log(fruits)
let no = fruits.concat(yes) //позволяет объединять массивы в один
console.log(no)
fruits.forEach((item, index) => { //перебирает все элементы массива
    console.log(item, index)
});
console.log(fruits.includes("apple"))//возвращает булево значение при проверке в массиве на нахождение элемента
console.log(fruits.indexOf("apple"))//вовзращает индекс элемента в массиве
console.log(fruits.lastIndexOf("apple"))//возвращает индекс послежнего указанного элемента
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 1, name: "Маша"}
  ];
console.log(users.find((item) => { //находит первый попавшийся элемент, который подходит по условию
    return item.id == 1
}))
console.log(users.filter((item) => { //находит все элементы, подходящие по условию и возвращает массив с ними
    return item.id == 1
}))
let newFruits = fruits.map((item) => {//применяет функцию к каждому элементу, возвращает новый массив с новыми элементами
    return item.length
})
console.log(newFruits)
let numb = [1, 2, 3, 8, 6, 1]
console.log(numb.sort((a, b) => { //сортирует элементы в массиве. изменяет оригинальный массив 
    return a - b//от меньшего к большему
}))
console.log(numb.sort((a, b) => {
    return b - a//от большего к меньшему
}))
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let usersAge = [ vasya, petya, masha ];
console.log(usersAge.sort((a, b) => {
    return a.age - b.age
}))
console.log(numb.reverse())//переворачивает массив задом наперёд
let names = "Ann, Nick, Anton"
let namesArray = names.split(",")//по указанному разделителю переводит строку в массив элементов
console.log(namesArray)
let word = "word"
console.log(word.split(""))//разделяет по символам. массив из символов
console.log(namesArray.join(":"))//из массива делает строку с указанным разделителм
//Напиши функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
    let array = str.split("-")
    let newArray = array.map((item, index) => {
        if (index == 0) {
            return item
        } else {
            return item[0].toUpperCase() + item.slice(1)
        }
    })
    return newArray.join("")
}
console.log(camelize("my-short-string"))
function filterRange(arr, a, b) {
    return arr.filter((item) => {
        return a <= item && item <= b
    })
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)
let arr1 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    let sortedArr = arr.slice() 
    return sortedArr.sort()
}

let sorted = copySorted(arr1);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr1 ); // HTML, JavaScript, CSS (без изменений)
let users1 = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 1, name: "Маша"}
  ];
  let usersNames = users1.map((item) => {//map возвращает массив
    return item.name 
  })
  console.log(usersNames)
//   дан массив каких то чисел. написать функцию getPow(arr)
//    которая вернет новый массив из квадратов этих чисел. кважрат - это 2 ** 2, то есть 2 в степени 2


// let users = [ vasya, petya, masha ];
// отфильтровать и оставить только тех пользователей возраст которых больше 27


// дан массив строк разных длин, отфильтровать и оставить только те длина у которых больше 5 символов


// сделать функцию которая вовращает строчку задом наперед
=======
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася"
// function ucFirst(str) {
//     let newStr = ""
//     for (let i = 0; i < str.length; i++ ) {
//         if (i == 0) {   
//          newStr += str[0].toUpperCase()
//         } else {
//         newStr += str[i]
//         }
//     }
//     return newStr
// }
// console.log(ucFirst("линия"))
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX',
// а иначе false.
// function checkSpam(str) {
//     newStr = str.toLowerCase() 
//     if (newStr.includes("viagra") || newStr.includes("xxx")) {
//         return true
//     } else {
//         return false
//     }
// }
// let a = "бла бла Viagra бла"
// console.log(checkSpam(a))
let b = "Меня зовут Александр. Мне 21 год"
console.log(b.slice(4, 10)) //позволяет вырезать кусок строки между определённых индексов
function ucFirst(str) {
    let newStr = ""
    newStr = str[0].toUpperCase()
    newStr += str.slice(1)
    return newStr
}
console.log(ucFirst("строка"))
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"
function trumcate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = str.slice(0, maxlength) + "..."
        return newStr
    } else {
        return str
    }
}
console.log(trumcate("Ghbtn", 20))
//extractCurrencyValue('$120') === 120
function extractCurrencyValue(val) {
    newVal = val.slice(1)
    return +newVal //плюсик в этой записи делает из строки число
}
console.log(extractCurrencyValue('$120') === 120)
let c = ["apple",
"banana",
"watermelon"
]
//push - добавить в конец
//pop - удалить из конца
//shift - удалить из начала
//unshift - добавить в начало
let numbers = [1, 2, 3, 4, 5, 6, 7]
function getOdd(numbers) {
    let oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] %2 == 0) {
            oddNumbers.push(numbers[i])
        }
    }
   return oddNumbers
}
console.log(getOdd(numbers))
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
    let e = []
    while (true) {
        let d = prompt("Введите число")
        if (d == null || d == "") {
            break
        } else {
            e.push(+d)
        }
    }
    let sum = 0
    for (let i = 0; i < e.length; i++) {
        sum += e[i]
    }
    return sum
}
console.log(sumInput())
let fruits = ["apple",
"banana",
"watermelon",
"apple"
]
fruits.splice(0, 0, "melon", "strawberries") //удаляет эелемнты массива и может их заменить на новые
let yes = fruits.slice(0, 2) //копирует в себя элементы массива. первое число - это индекс первого 
//элемента, а второе число это кол-во элементов
console.log(fruits)
let no = fruits.concat(yes) //позволяет объединять массивы в один
console.log(no)
fruits.forEach((item, index) => { //перебирает все элементы массива
    console.log(item, index)
});
console.log(fruits.includes("apple"))//возвращает булево значение при проверке в массиве на нахождение элемента
console.log(fruits.indexOf("apple"))//вовзращает индекс элемента в массиве
console.log(fruits.lastIndexOf("apple"))//возвращает индекс послежнего указанного элемента
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 1, name: "Маша"}
  ];
console.log(users.find((item) => { //находит первый попавшийся элемент, который подходит по условию
    return item.id == 1
}))
console.log(users.filter((item) => { //находит все элементы, подходящие по условию и возвращает массив с ними
    return item.id == 1
}))
let newFruits = fruits.map((item) => {//применяет функцию к каждому элементу, возвращает новый массив с новыми элементами
    return item.length
})
console.log(newFruits)
let numb = [1, 2, 3, 8, 6, 1]
console.log(numb.sort((a, b) => { //сортирует элементы в массиве. изменяет оригинальный массив 
    return a - b//от меньшего к большему
}))
console.log(numb.sort((a, b) => {
    return b - a//от большего к меньшему
}))
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let usersAge = [ vasya, petya, masha ];
console.log(usersAge.sort((a, b) => {
    return a.age - b.age
}))
console.log(numb.reverse())//переворачивает массив задом наперёд
let names = "Ann, Nick, Anton"
let namesArray = names.split(",")//по указанному разделителю переводит строку в массив элементов
console.log(namesArray)
let word = "word"
console.log(word.split(""))//разделяет по символам. массив из символов
console.log(namesArray.join(":"))//из массива делает строку с указанным разделителм
//Напиши функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
    let array = str.split("-")
    let newArray = array.map((item, index) => {
        if (index == 0) {
            return item
        } else {
            return item[0].toUpperCase() + item.slice(1)
        }
    })
    return newArray.join("")
}
console.log(camelize("my-short-string"))
function filterRange(arr, a, b) {
    return arr.filter((item) => {
        return a <= item && item <= b
    })
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)
let arr1 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    let sortedArr = arr.slice() 
    return sortedArr.sort()
}

let sorted = copySorted(arr1);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr1 ); // HTML, JavaScript, CSS (без изменений)
let users1 = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 1, name: "Маша"}
  ];
  let usersNames = users1.map((item) => {//map возвращает массив
    return item.name 
  })
  console.log(usersNames)
//   дан массив каких то чисел. написать функцию getPow(arr)
//    которая вернет новый массив из квадратов этих чисел. кважрат - это 2 ** 2, то есть 2 в степени 2


// let users = [ vasya, petya, masha ];
// отфильтровать и оставить только тех пользователей возраст которых больше 27


// дан массив строк разных длин, отфильтровать и оставить только те длина у которых больше 5 символов


// сделать функцию которая вовращает строчку задом наперед
>>>>>>> c75968bf4b2a274d4a966a13c1b38ddd8ea368c6
//  reverseStr(str) ('карина'=>'анирак') пригодится split reverse и join