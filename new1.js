let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Peter"
delete user.name 
let object = {
    price: 200, 
    count: 4
}
let sum = 1
for (let key in object) {
    sum *= object[key]
}
console.log(sum)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum2 = 0
  for (let key in salaries) {
    sum2 += salaries[key]
  }
  console.log(sum2)
  console.log(typeof(100))
//   Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
// multiplyNumeric(menu);
// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == "number") {
            obj[key] *=2 
        }
    }
}
multiplyNumeric(menu)
console.log(menu)
console.log(Math.floor(2.9))
console.log(Math.ceil(2.3))
console.log(Math.round(2.5))
let num = 12.34
console.log(num.toFixed(1))
console.log(Number.isFinite("number"))
console.log(Math.random())
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
// пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена»
// В этом случае функция должна вернуть null.
// function readNumber() {
//     let a 
//     do {
//         a = prompt("Введите число")
//     } while (!isFinite(a))
//     if (a == null || a == "") {
//         return null
//     }
//     return a
// }
// console.log(readNumber()) 
console.log(`сумма: ${2+2}`)
for (let char of "Hello") {
    console.log(char)
}
console.log("String".toUpperCase())
console.log("STRING".toLowerCase())
let str = "Hello. My name is Anton."
console.log(str.indexOf("name"))
console.log(str.includes("Anton"))
console.log(str.endsWith("ton."))