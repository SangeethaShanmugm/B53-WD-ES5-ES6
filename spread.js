const arr = ["We", "are", "learning", "spread", "operator"]

console.log(arr)

console.log(...arr)
console.log("We", "are", "learning", "spread", "operator")

//copy array

const arr1 = ["one", "two"]

const arr2 = ["three", "four", "five", ...arr1]

console.log(arr1)//["one", "two"]
console.log(arr2)//['three', 'four', 'five', 'one', 'two']

const sameAddress = arr1 === arr2

console.log(sameAddress)//false => different address


//clone array 

let a = [1, 2, 3]
let b = a //copy by reference

const c = a === b

console.log(c)//true

console.log(a)//[1, 2, 3]
console.log(b)//[1, 2, 3]


let data = ["apple", "banana", "grapes"]
//copy array
let copiedData = [...data]

console.log(data) //['apple', 'banana', 'grapes']
console.log(copiedData)//['apple', 'banana', 'grapes']

let address = data === copiedData
console.log(address)//false

data.push("mango")

console.log(data)// ['apple', 'banana', 'grapes', 'mango']
console.log(copiedData)// ['apple', 'banana', 'grapes']


//rest parameter  => using spread operator in function argument 

let func = function (...arg) {
    console.log(arg)
}

func(2)//[2]
func(4, 7, 8)//[4, 7, 8]
func(1, 5, 9, 12)//[1, 5, 9, 12]


function multiple(x, y, z, a) {
    console.log(x * y * z * a)
}

const multi = [2, 4, 6, 8, 1, 2]

multiple(...multi) //48

function displayInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}`) 
    console.log(`Hobbies: ${hobbies.join(", ")}`)
}

displayInfo("Jack", 20, "reading", "traveling", "painting", "dancing")