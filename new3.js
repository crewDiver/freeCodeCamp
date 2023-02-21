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
//         return b[0] - a[0]
//     })
//     return sortByNumber.sort().reverse()
// }
// console.log(countVegetables(list))
// function orderedCount(text) {
//     let arr = text.split("")
//     let object = {}
//     let newArr = []
//     for (let char of arr) {
//         if (object[char]) {
//             object[char]++
//         } else {
//             object[char] = 1
//         }
//     }
//     for (let key in object) {
//         newArr.push([key, object[key]])
//     }
//    return newArr
// }
// console.log(orderedCount("233312"))
function nearestSq(n){
   if (n ** 1/2 == ) 
}