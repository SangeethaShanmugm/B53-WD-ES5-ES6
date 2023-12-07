// class => blueprint of object 

//class creation
class Cars {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color
    }

    displayModel() {
        console.log(`The model of the ${this.name} is ${this.model}`)
    }


}

//create object
const bmw = new Cars("bmw", "x7", "black")
console.log(bmw)
bmw.displayModel()

const rr = new Cars("rr", "rr1", "white")
console.log(rr.name)
rr.displayModel()



//this  => object property access

let firstName = 'Sathya';
let lastName = 'G';


const user = {
    firstName: 'Gokulnath',
    lastName: 'S',
    greet: function () {
        return `Say hi to ${this.firstName} ${this.lastName}`
    }
}

console.log(user.greet())//Say hi to Gokulnath S