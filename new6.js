// class Animal {
//     constructor(name) {
//         this.name = name
//     }
// }
// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows.`
//   }
// }
// let dog = new Cat ("Ted")
// let variant = new Animal ("Whiskers")
// console.log(dog.speak())
// function numberToPower(number, power){
//     let powerNumber = 1
//     for (let i = 0; i < power; i++) {
//         powerNumber *= number
//    }
//    return powerNumber
//   }
//   console.log(numberToPower(3, 3))
// function xor(a, b) {
//     if (a == b) {
//         return false
//     } else {
//         return true
//     }
//   }
// function keepOrder(ary, val) {
//     let newArr = [...ary]
//     for (let i = newArr.length; i >= 0; i--) {
//         if (newArr[i] < val) {
//             newArr.splice(i + 1, 0, val)
//             return i + 1
//         }
//     }
//     return 0
//   }
//   console.log(keepOrder([1, 2, 3, 4, 7], 0))
function mergeStrings(first, second){
   let newStr = ""
   metka: 
   for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < second.length; j++) {
        if (first[i] !== second[j]) {
            if (j > first.length) {
                newStr += second[j]
            } else {
                newStr += first[i]
                continue metka
            }
        } 
    }
   }
   return newStr
  }
console.log(mergeStrings("abcde", "cdefgh"))//abcdefgh