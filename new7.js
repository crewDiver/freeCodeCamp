// function nerdify(txt){
//     let str = ""
//     let obj = {
//         "a" : 4,
//         "A" : 4,
//         "e" : 3,
//         "E" : 3,
//         "l" : 1,
//     }
//     for (let i = 0; i < txt.length; i++ ) {
//         if (txt[i] in obj) {
//            str += obj[txt[i]]
//         } else {
//             str += txt[i]
//         }
//     }
//     return str
// }
// console.log(nerdify("Fundementals"))
// function checkDigit(number, index1, index2, digit) {
//     let str = number + ""
//     let arrOfNumbers = str.split("") 
//     let maxIndex 
//     let minIndex
//     if (index1 > index2) {
//         maxIndex = index1
//         minIndex = index2
//     } else {
//         maxIndex = index2
//         minIndex = index1
//     }
//     for (let i = minIndex; i <= maxIndex; i++) {
//         if (arrOfNumbers[i] == digit) {
//             return true
//         }
//     }
//     return false 
//   };
//   console.log(checkDigit(87996599994565, 2, 5, 1))
// function repeatStr (n, s) {
//     let str = ""
//  for (let i = 0; i < n; i++){
//  str += s
//  }
//  return str
// }
// console.log(repeatStr(3, "hi"))
// function isDivisible(n, x, y) {
//     let resultX = n %x
//     let resultY = n%y
//     if (resultX == 0 && resultY == 0) {
//         return true
//     }
//     return false
// }
// console.log(isDivisible(12, 7, 5))
class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`
    }
}

