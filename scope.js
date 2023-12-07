// scope => lifetime of a variable
//let => block scope
//var  => global scope
//{} => block
{
    let y1 = 10;
    var y2 = 20
}
console.log(y2)

// not defined (error) vs undefined(value)
//can a block hold y2 or will it leak outside => Yes

//shadowing 
var price = 1000//pant

function getPrice() {
    console.log("The old price is", price)
    //1000 lines 
    var price = 500 //MSD
    console.log("The new price is", price)
}
getPrice()

//hoisting + lexical scope

// lexical scope
// ---------------

// grandFather => 💰             => 🏡(Own scope) =>

// Father => 💰 + 💰        => 🚘(Own scope) + 🏡 lexical scope(grandFather)

// Children => 💰 + 💰 + 💰   => 💻(Own scope) + 🚘 lexical scope(Father) + 🏡 Father lexical scope(grandFather)


//Closure => own scope + lexical scope

function outer() {
    var a = 20;
    function inner() {
        console.log(a)
    }
    return inner
}
outer()()
// var close = outer()
// close()

function x(a) {
    console.log(a)
    // return a
}
x(10)
// console.log(x(10))


function outerFunc() {
    var outVar = "I am outer func"

    function innerFunc() {
        var innerVar = "I am inner func"
        console.log(outVar)
        console.log(innerVar)
    }
    return innerFunc
}
var closureFunc = outerFunc()
closureFunc()
// console.log(closureFunc)

//hoisting 

console.log(z)//undefined
var z = 50
console.log(z) //50

// Does in JS compilation happens? Yes

//JS => JIT => Just In Time Compilation
// 1. Compilation Phase => console => skip
// 2. Execution Phase => JS & Context

//Example - 1 => var
// 1. Compilation Phase 
console.log(z) // Skip
var z = 50// JS => Do you know z? No || What is value? => context => z = undefined
console.log(z) // Skip

// 2. Execution Phase

console.log(z) //JS => Do you know z? Yes || What is value? => context =>  undefined
var z = 50// JS => Do you know z? Yes || What is value? => context => z= 50
console.log(z)// JS => Do you know z? Yes || What is value? => context = 50


//Example - 1 => let 
// 1. Compilation Phase 
// console.log(y) // Skip
// let y = 50// JS => Do you know y? No || What is value? => context => y = don't initialize
// console.log(y) // Skip


// 2. Execution Phase
// console.log(y) // JS => Do you know y? yes || What is value? => context => y => Uncaught ReferenceError: Cannot access 'y' before initialization
// let y = 50
// console.log(y) 


let price1 = 1000

function getPrice() {
    // console.log("The old price is", price) //Uncaught ReferenceError: Cannot access 'price' before initialization
    //1000 lines 
    // let price1 = 500
    console.log("The new price is", price1)
}
getPrice()


