// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася"
function ucFirst(str) {
    for (let i = 0; i < str.lenght; i++ ) {
        if (i = 0) {
            str[0].toUpperCase()
        }
        str[i] += str[i++]
    }
    return str
}
console.log(ucFirst("линия"))
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX',
// а иначе false.
function checkSpam(str) {
    str.toLowerCase()
    if (str.includes("viagra") || str.includes("xxx")) {
        return true
    } else {
        return false
    }
}
let str = "бла бла Viagra бла"
console.log(checkSpam(str))