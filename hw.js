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
"watermelon"
]
fruits.splice(0, 0, "melon", "strawberries")
let yes = fruits.slice(0, 2) //копирует в себя элементы массива. первое число - это индекс первого 
//элемента, а второе число это кол-во элементов
console.log(fruits)
let no = fruits.concat(yes) //позволяет объединять массивы в один
console.log(no)
fruits.forEach((item, index) => { //перебирает все элементы массива
    console.log(item, index)
}); 