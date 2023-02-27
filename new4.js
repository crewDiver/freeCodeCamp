// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.reduce((count, item) => {
//     if (item) {
//        return count + 1
//     } else {
//         return count
//     }
//   },0)
// }
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))
// function find(array, element) {
// let i = array.indexOf(element)
//     return i == -1 ? "Not found" : i
//   }
// function describeAge(age) {
//     let s="You're a(n) "
//     return (age<=12)?s+"kid":(age>=13&&age<=17)?s+"teenager":(age>=18&&age<=64)?s+"adult":s+"elderly"
//   }
// function missingWord(nums, str) {
//   nums.sort((a, b) => {
//     return a - b
//   })
//   let arr = str.split(" ").join("").split("")
//   let newStr = ""
//   for (let i of nums) {
//     if (!arr.includes(arr[i])) {
//         newStr = "No mission today"
//         break
//     } else {
//         newStr += arr[i].toLowerCase()
//     }
//   }
//   return newStr
// }
// console.log(missingWord([5, 0, 3], "I love you"))
const removeConsecutiveDuplicates = s => {
    let str = []
    let a = s.split(" ")
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] !== a[i + 1]) {
            str.push(a[i])
        }
    }
    str.push(a[a.length - 1])
    return str.join(" ")
}
console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma deltaalpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))