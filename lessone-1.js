const numbers = 10
console.log(typeof numbers)

const strings = "Yes, I am a string"
console.log(typeof strings)

const booleans = true
console.log(typeof booleans)

const nulls = null
console.log(typeof nulls)

let undefineds
console.log(typeof undefineds)

const ojects = {}
console.log(typeof ojects)

const arrays = []
console.log(typeof arrays)

function myFunction() {}
console.log(typeof myFunction)

const name = () => {}
console.log(typeof name)

// console.log( "До")
// alert("Привіт!")
// console.log("Після")
let elementWidth  = "100px"
const result = Number.parseInt(elementWidth)
console.log(result)

let elementHeight = "100.52px"
const result2 = Number.parseFloat(elementHeight)
console.log(result2)

const salary = 1300.123456
const salaryFixed = Number(salary.toFixed(3))
console.log(salaryFixed)

const colors = ["red", "green", "blue", "yellow"]
const max = colors.length -1
const min = 0
const index = Math.round(Math.random() * (max - min) + min)
const color = colors[index]
console.log(color)

document.body.style.backgroundColor = color

const message = "Дізнатися кількість символів"
console.log(message.length)

const firstName = "John"
const lastName = "Doe"
const fullName = firstName + " " +  lastName
console.log(fullName)

const quontity = 10
const orderMsg = `Ви замовили ${quontity} товарів`
console.log(orderMsg)

const brand = "Apple"
const normalizedBrand = brand.toLowerCase()
console.log(normalizedBrand)

const brand2 = "Samsung"
const normalizedBrand2 = brand2.toUpperCase()
console.log(normalizedBrand2)

const world = "Hello"
const string1 = "Hello, Hi"
const normalizedString1 = string1.includes(world)
console.log(normalizedString1)

const string3 = "Welcome"
const result3 = string3.slice(1, string3.length - 1)
console.log(result3)

const balance = 1000
let message2

if(balance >= 0) {
    message2 = "Позитивний баланс"
} else {
    message2 = "Негативний баланс"
}

console.log(message2)

const message3 = balance >= 0 ? "Позитивний баланс" : "Нагитивний баланс"
console.log(message3)
