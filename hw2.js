//первая задача
const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
]
function max(arr) {
    arr.reduce((sum, item) => {
      return sum.push(item.forEach(element => {
            let sum1 = 0
            return sum1 += element
        })) 
    },[])
    sum.sort((a, b) => {
        return b - a
    })
    return sum[0]
}
console.log(max(sums))

function min(arr) {
    arr.reduce((sum, item) => {
        return sum.push(item.forEach(element => {
              let sum1 = 0
              return sum1 += element
          })) 
      },[])
      sum.sort((a, b) => {
          return a - b
      })
      return sum[0]
}
console.log(min(sums))

function average(arr) {
    arr.reduce((sum, item) => {
        return sum.push(item.forEach(element => {
              let sum1 = 0
              return sum1 += element
          })) 
      },[])
//здесь должно быть среднее арифметическое
}
comsole.log(average(sums))
//вторая задача
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
    arr1.reduce((oddArr1, item) => {
        oddArr1.push(item)
    }[])
}
//третья задача
function getDigitsSum(numb) {
   let digits = numb.split("")
   return digits.map((item) => {
    return item +=
   }) 
}
console.log(getDigitsSum(302))
