// function vowelIndices(word){
// let arr = []
// let chars = word.split("")
// let str = "aeiouy"
//   for (let i = 1; i <= chars.length; i++) {
//     if (str.includes(chars[i - 1].toLowerCase())) {
//         arr.push(i)
//     }
//   }
//   return arr
// }
// console.log(vowelIndices("wOrd"))
// function isVow(a){
//     let vowels = "aeiou"
//     let newA = a.map((item) => {
//         let x = String.fromCharCode(item)
//         if (vowels.includes(x)) {
//             return x
//         } else {
//             return item
//         }
//     })
//     return newA
// }
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))
// function explode(x){
//     let numbers = x.filter((item) => {
//         return isFinite(item)
//     })
//     let sum = 0
//     if (numbers.length == 0) {
//         return "Void!"
//     } else {
//         for (let number of numbers) {
//             sum += number
//         }
//         let arr = []
//         for (let i = 0; i < sum; i++) {
//             arr.push(x)
//         }
//         return arr
//     }
// }
// console.log(explode(["a", 0]))
// function arrayPlusArray(arr1, arr2) {
//     let sum = arr1.reduce((sum, item) => {
//         return sum + item
//     },0)
//     let sum1 = arr2.reduce((sum, item) => {
//         return sum + item
//     },0)
//     return sum + sum1
//   }
const arrCheck = value => {
    for (let item of value) {
        if (!Array.isArray(item)) {
            return false
        }
    }
    return true
}
