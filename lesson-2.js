const start = 4
let price = 0

switch (start) {
    case 1:
        price = 100
        break
    case 2:
        price = 200
        break
        case 3:
        price = 300
        break

        default:
           console.log("Такої кількості зірок не має")
}
console.log(price)

// for(let i = 0; i >= 0; i += 1) {

//     console.log(i)
// }

// for(let i = 10; i >= 0; i -= 1) {

//     console.log(i)
// }

let total = 0

for(let i = 0; i <= 5; i += 1) {
    if (i % 2 !== 0) {
        console.log(i)
        continue
    }
    console.log(i)

    total += i
}
console.log(total)