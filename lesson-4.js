

const calculateTotal = function (carts) {
let total = 0

for(const i of carts) {
    if (i % 2 !== 0) {
        continue
    }
    total += i
}

return total


}
console.log(calculateTotal([1, 2, 3]))
console.log(calculateTotal([10, 20, 3]))

const logins = ["user1", "user2", "user3"]
const loginToFind = "user2"

const findlogins = function (logins, loginToFind) {
return logins.includes(loginToFind) ? `Знайден ${loginToFind}` : `Не знайден ${loginToFind}` 
}
console.log(findlogins(logins, loginToFind))


const add = function (...args) {
    let total = 0
    for (const i of args) {
        total += i
    }
    return total
}
console.log(add(1, 2 ,3, 4, 5))

const filteredNumbers = function (array, ...args) {
    const filteredArray = []

    for (const i of array) {
        if (args.includes(i)) {
            filteredArray.push(i)
        }
    }

    return filteredArray
}
console.log(filteredNumbers([1, 2, 3, 4, 5], 4, 5, 6))

