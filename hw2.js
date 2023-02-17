//первая задача
const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
]
function max(arr) {
  let arrOfSum = arr.reduce((arrSum, item) => {
        let sum = 0
        item.forEach((numb) => {
            sum += numb
        })
        arrSum.push(sum)
        return arrSum
    },[])
    arrOfSum.sort((a, b) => a - b)
    return arrOfSum[arrOfSum.length - 1] 
}
console.log(max(sums))

function min(arr) {
    let arrOfSum = arr.reduce((arrSum, item) => {
          let sum = 0
          item.forEach((numb) => {
              sum += numb
          })
          arrSum.push(sum)
          return arrSum
      },[])
      arrOfSum.sort((a, b) => a - b)
      return arrOfSum[0] 
  }
console.log(min(sums))

function average(arr) {
   let sum =  arr.reduce((sum, item) => {
        item.forEach((numb) => {
            sum += numb
        })
        return sum
    },0)
    return sum / arr.length
}
console.log(average(sums))
// //вторая задача
const sums1 = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
]
const sums2 = [
    [2, 4, 11],
    [1, 2, 5, 6],
    [3, 10, 1],
    [1, 6, 1]
]
function comparison(arr1, arr2) {
    let sum1 =  arr1.reduce((sum, item) => {
        item.forEach((numb) => {
            if (numb %2 == 0) {
                sum += numb
            }
        })
        return sum 
    },0)
    let sum2 =  arr2.reduce((sum, item) => {
        item.forEach((numb) => {
            if (numb %2 == 0) {
                sum += numb
            }
        })
        return sum 
    },0)
    if (sum1 > sum2) {
        return sum1
    } else {
        return sum2
    }
}
console.log(comparison(sums1, sums2))
// //третья задача
function getDigitsSum(numb) {
    let str = numb + ""//делает строкой
   let digits = str.split("")
   return digits.reduce((sum, item) => {
    return sum += +item//делает числом
},0) 
}
console.log(getDigitsSum(302))
function reverseWords(str) {
   let arr = str.split(" ")
   let words = arr.map((item) => { 
    return item.split("").reverse().join("")
   })
   return words.join(" ")
  }
  console.log(reverseWords("double  spaces"))
//   "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function century(year) {
    let vek = year %100
    if (vek == 0) {
        return year / 100
    } else {
        return Math.ceil(year / 100)
    }
} 
console.log(century(988))
