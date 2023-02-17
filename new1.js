let user = {} //это объект
user.name = "John" //добавление ключа и свойства
user.surname = "Smith"
user.name = "Peter" //изменение ключа и свойства
delete user.name  //удаление ключа
let object = {
    price: 200, 
    count: 4
}
let sum = 1
for (let key in object) { //перебор всех ключей в объекте
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
  console.log(typeof(100)) //typeof() возвращает строкой вид переменной в скобках
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
console.log(Math.floor(2.9)) //округление в меньшую сторону
console.log(Math.ceil(2.3)) //округление в большую сторону
console.log(Math.round(2.5)) //математически верное округление
let num = 12.34
console.log(num.toFixed(1)) //окгругление до знака после запятой
console.log(Number.isFinite("number")) //метод Number.isFinite проверяет является ли переменная числом и возвращает булево значение
console.log(Math.random()) //возвращает случайное число от 0 до 1
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
console.log(`сумма: ${2+2}`) //в обратных ковычках можно писать любой текст, даже код и он будет просто строкой. 
//$() эта функция исполнит код в скобках
for (let char of "Hello") { //перебор символов в строке
    console.log(char)
}
console.log("String".toUpperCase()) //делает регистр в строке верхним
console.log("STRING".toLowerCase()) //делает регистр низким
let str = "Hello. My name is Anton."
console.log(str.indexOf("name")) //возвращает индекс первого символа, с которого начинается искомая часть строки
console.log(str.includes("Anton")) //проверяет есть ли искомый кусок строки в исходной строке и возвращает булево значение
console.log(str.endsWith("ton."))
