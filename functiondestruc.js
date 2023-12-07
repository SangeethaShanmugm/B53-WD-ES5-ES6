
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

//function destructuring

//Aravind has got 90 and he belongs to B53WD
function printDetails(student1) {
    return student1.studentName + " has got " + student1.score + " and he belongs to " + student1.batch
}

console.log(printDetails(student1))

//destructuring 

function printDetails1(student1) {
    const { studentName, score, batch } = student1
    return studentName + " has got " + score + " and he belongs to " + batch
}

console.log(printDetails1(student1))


//destruct in argument itself
function printDetails2({ studentName, score, batch }) {
    // const { studentName, score, batch } = student1
    return studentName + " has got " + score + " and he belongs to " + batch
}

console.log(printDetails2(student1))

//Template literals =>``=> Backtick +  ${} => interpolation => substitute value

function printDetails3({ studentName, score, batch }) {

    return `${studentName} has got ${score} and he belongs to ${batch}`
}

console.log(printDetails3(student1))

//arrow function + Template literals +  destructuring=> ES6
const printDetails4 = ({ studentName, score, batch }) =>
    `${studentName} has got ${score} and he belongs to ${batch}`


// console.log(printDetails4(student1))
