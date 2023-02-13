//   дан массив каких то чисел. написать функцию getPow(arr)
//    которая вернет новый массив из квадратов этих чисел. кважрат - это 2 ** 2, то есть 2 в степени 2
let digits = [1, 2, 3, 4, 5]
function getPow(arr) {
    arr.map((item) => {
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
    arr.filter((item) => {
        return item.age > 27
    })
}
console.log(oldPeople(users))

// дан массив строк разных длин, отфильтровать и оставить только те длина у которых больше 5 символов

let strings = ["строка", "string", "long string", "cat", "very long string"]
function giveStrings(arr) {
    arr.filter((item) => {
        if (item.length > 5) {
            return item 
        }
    })
}
console.log(giveStrings(strings))

// сделать функцию которая вовращает строчку задом наперед
//  reverseStr(str) ('карина'=>'анирак') пригодится split reverse и join

function reverseStr(str) {
    let arr = str.split()
    let arrRev = arr.reverse()
    return arrRev.join(",")
}
let string = "карина"
console.log(reverseStr(string))