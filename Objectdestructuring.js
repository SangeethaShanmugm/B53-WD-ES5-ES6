const farm = {
    animalName: "🐮",
    type: "Domestic Animal",
    amount: "2L"
}

console.log(farm)//{animalName: '🐮', type: 'Domestic Animal', amount: '2L'}

const {
    animalName,
    type,
    count = 500,
    country = ["India", "Africa"]
} = {
    animalName: "🐮",
    type: "Domestic Animal",
    amount: "2L"
}

console.log(animalName, count, country)
//🐮 500 (2) ['India', 'Africa']


const avenger = {
    name: "Tony Shark",
    house: "🏡",
    networth: "💰💰💰💰",
    power: "🤖",
    phrase: "Happy Day"
}

const {
    name,
    networth,
    power = "💿",
    skill = ["genius", "billionarie", "philanthropist"]
} = {
    name: "Tony Shark",
    house: "🏡",
    networth: "💰💰💰💰",
    power: "🤖",
    phrase: "Happy Day"
}


console.log(name, power, skill)
//Tony Shark 🤖 ['genius', 'billionarie', 'philanthropist']

const avg = {
    name: "Tony Shark",
    house: "🏡",
    networth: "💰💰💰💰",
    power: "🤖",
    phrase: "Happy Day"
}

// const avg1 = { ...avg, nation: "US", power: "💿" }
// console.log("avg", avg)
// console.log("avg1", avg1)


const avg2 = { nation: "US", power: "💿", ...avg }
console.log("avg", avg)
console.log("avg2", avg2)


//creating object 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}

const { firstName, lastName } = person

console.log(firstName, lastName)

const cars = {
    make: "BMW",
    model: "model1"
}


//object destructuring 
const { make, model, year = 2021 } = cars

console.log(make)
console.log(year)


//rename varible
const user = {
    username: "John",
    email: "john@gmail.com"
}


//rename var during destructing

const { username: userName, email: userEmail } = user

console.log(userName, userEmail)

//nested destructure

const student = {
    name1: "john",
    info: {
        age: 15,
        grade: "A"
    }
}
//nested destruct

const { name1, info: { age, grade } } = student

console.log(name1, age, grade)


const person1 = {
    name2: "john",
    age1: 15,
    address: {
        city: "Bangalore",
        zipcode: "100001"
    },
    hobbies: ["reading", "coding", "travelling"]
}

const { name2, age1, address: { city, zipcode }, hobbies: [reading, coding, travelling] } = person1

console.log(city)
console.log(reading)
console.log(travelling)



//shadowing 

let x = 10;

function example() {
    let x = 20;
    console.log(x)
}
example()

console.log(x)


// object shorthand => key and value name should be same
// ------------------

const studentAge = 20
const batch = "B53WD"
const mark = 90

const student1 = {
    studentName: "Aravind",
    studentAge,
    batch,
    score: mark,
}
console.log(student1)
