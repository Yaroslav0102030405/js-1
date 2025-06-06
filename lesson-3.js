const friends = []
friends.push("Alice")
friends.push("Bob")
friends.push("Charlie")
console.log(friends)

console.log(friends.indexOf("Bob"))
console.log(friends[0] = "Alex")
console.log(friends)

for (const friend of friends) {
    console.log(friend)
}

const carts = [1, 2, 3, 4, 5 ]
let total = 0

for (const cart of carts) {
total += cart
}
console.log(total)

for(const i of carts) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(i)
    total += i
}
console.log(total)

const logins = ["user1", "user2", "user3"]
const loginToFind = "user2"
let message = ""

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Знайден ${loginToFind}`
//         break
//     } else {
//         message = `Не знайден ${loginToFind}`
//     }
// }
// console.log(message)

const message2 = loginToFind.includes("user") ? `Знайден ${loginToFind}` : `Не знайден ${loginToFind}`
console.log(message2)

const numbers1 = [50, 20, 30]
let smailNumber = numbers1[0]

for (const number of numbers1) {
    if (number < smailNumber) {
        smailNumber = number
    }
}
console.log(smailNumber)

const friends2 = ["Alice", "Bob", "David"]
const string = friends.join("-")
console.log(string)

const title = "I am JavaScript"
const normalizedTitle = title.toLowerCase().split(" ").join("-")
console.log(normalizedTitle)

const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]
const array3 = [...array1, ...array2]
let total2 = 0

for (const number of array3) {
    total2 += number
}
console.log(total2)

const cards = ["Карточка 1", "Карточка 2", "Карточка 3"]

const cardToRemove = "Карточка 2"
const index = cards.indexOf(cardToRemove)
console.log(index)
cards.splice(index, 1)
console.log(cards)

const newCard = "Карточка 4"
cards.splice(2, 0, newCard)
console.log(cards)

const cardUpdate = "Карточка 3"
const updateCardIndex = cards.indexOf(cardUpdate) 
cards.splice(updateCardIndex, 1, "Карточка 5")
console.log(cards)


