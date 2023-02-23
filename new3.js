// function bubbleSortOnce(arr) {
//     let arrCopy = arr.slice(0)
//     for (let i = 0; i < arrCopy.length; i++) {
//         for (let j = 0; j < arrCopy.length; j++) {
//             if (arrCopy[j] > arrCopy[j + 1]) {
//                 let temp = arrCopy[j]
//                 arrCopy[j] = arrCopy[j + 1]
//                 arrCopy[j + 1] = temp 
//             }
//         }
//     }
//     return arrCopy
// // }
// console.log(bubbleSortOnce([5, 0, 11, 8, 3, 7, 2]))
// function bubbleSortOnce(arr) {
//     let arrCopy = arr.slice(0)
   
//         for (let j = 0; j < arrCopy.length; j++) {
//             if (arrCopy[j] > arrCopy[j + 1]) {
//                 let temp = arrCopy[j]
//                 arrCopy[j] = arrCopy[j + 1]
//                 arrCopy[j + 1] = temp 
//             }
//         }
//     return arrCopy
// }
// let list = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
// function countVegetables(string){
//     let arr = string.split(" ")
//     let object = {}
//     let newArr = []
//     for (let vegetable of arr) {
//         if (object[vegetable]) {
//             object[vegetable]++
//         } else {
//             object[vegetable] = 1
//         }
//     }
//     for (let key in object) {
//         newArr.push([object[key], key])
//     }
//     let sortByNumber = newArr.sort((a, b) => {
//         return (b[0] - a[0] || b[1].localeCompare(a[1]))
//     })
//     return sortByNumber
// }
// console.log(countVegetables(list))
//function orderedCount(text) {
//    let result = []
//    for (let i = 0; i < text.length; i++) {
//       let count = 0
//       for (let j = 0; j < result.length; j++) {
//          if (result[j][0] == text[i]) {
//             count++
//          }
//       }
//       if (count == 0) {
//          for (let j = i; j < text.length; j++) {
//             if (text[i] == text[j]) {
//                count++
//             }
//          }
//          result.push([text[i], count])
//       }
//    }
//    return result
// }
// console.log(orderedCount("233312"))
// function nearestSq(n){
//    let koren = Math.sqrt(n)
//    let rounded = Math.round(koren)
//    return Math.pow(rounded, 2)
// }
// String.prototype.toJadenCase = function () {
//   let arrWords = this.split(" ")
//   let newArrWords = arrWords.map((char) => {
//    return char[0].toUpperCase() + char.slice(1)
//   })
//   return newArrWords.join(" ")
// };
// let str = "How can mirrors be real if our eyes aren't real"
// console.log(str.toJadenCase())
// function strCount(str, letter){  
//    let arrChar = str.split("")
//    let count = 0
//    for (let char of arrChar) {
//       if (letter == char) {
//          count++
//       }
//    }
//    return count
// }
// console.log(strCount("", "i"))
// var cubeChecker = function(volume, side){
//    if (side <= 0 || volume <= 0) {
//       return false
//    }
//    if (Math.cbrt(volume) == side) {
//       return true
//    }
//    return false
// };
// console.log(cubeChecker(64, -4))
// function uniTotal (string) {
//    let arr = string.split("")
//    return arr.reduce((sum, char) => {
//       return sum + char.charCodeAt(0) 
//    },0)
// }
// let a = "Eebc ba"
// console.log(uniTotal(a))
function mystery() {
   var results =
     {sanity: 'Hello'};
   return results;
 }
 