console.log(" ====== OBJECTS PART 1 ======= ");
// => representation of entities that exist in the real world
// => consists of PROPERTIES and METHODS


// ===> Example: Anonymous object, created using object-literals 
// (curly brackets {})

let dog = {
    name: "Marley",
    "color":"brown",
    age : 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    bark: function () {
        console.log("AW AW AW");
    },
    printInfo: function () {
        console.log(`Dog: ${this.name}. Age: ${this.age}. Owner ${this.owner.firstName}`);
    },
    getThis: this,
    printThisAnonymous: () => {
        console.log(this);        
    },
    printThis: function () {
        console.log(this);        
    }
}
dog.printInfo();
console.log(dog.getThis);
dog.printThisAnonymous();
dog.printThis();

function Person(firstName, lastName) {
    this.firstName = firstName ? firstName : "unnamed";
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
    this.getThis = this;
    this.printThisAnonymous = () => {
        console.log(this);        
    }
    this.printThis = function () {
        console.log(this);        
    }
}

let john = new Person("John", "Doe")
console.log(john.getFullName());
console.log(john.getThis); // current Person instance (john object)
john.printThisAnonymous(); // john object
john.printThis(); // john object

console.log("");
console.log(" ===== The window object ===== ");
console.log(this === window);
window.testWindowObject();

function testWindowObject () {
    console.log("Hello this is globally declared function!");    
}

function testWindowObject() {
    console.log("Hello this is globaly declared function");
}

var testWindowVar = "test";
console.log(window.testWindowVar);


let bob = Object.create(person);
bob.firstName="John";
console.log(bob);
console.log(bob.firstName);
let newObject = Object.create(null);
newObject.newProperty = "Nema poenta";

// ***assign***
// => method that can merge two objects into one. It accepts two objects and tries to merge the second object into the first one

let bobsAddress = {
    street: "Bobsky St.",
    city: "Skopje",
    printInfo: function () {
        console.log("Info");
    }
}
let bobsInfo = Object.assign(person, bobsAddress);
// let mergedObjects = {
//     firstName: "Bob",
//     lastName: "Bobsky",
//     greet: function () {
//         console.log("Hello !");
//     },
//     street: "Bobsky St.",
//     city: "Skopje",
//     printInfo: function () {
//         console.log("Info");
//     }
// }
console.log(bobsInfo);
bobsInfo.printInfo();


console.log("");
console.log("============== Exploring the object ==============");

let barnie = {
    name: "Barnie",
    age: 1,
    bark: function () {
        console.log("Aw aw aw");
    }
}

let barniesKeys = Object.keys(barnie);
console.log(barniesKeys);

let barniesValues = Object.values(barnie);
console.log(barniesValues);

let keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);

console.log("");
console.log("============== Changing the object accessibility ==============");
// *** freeze ***
// => completely lock our object for any modifications
// => adding new properties/methods is not allowed
// => changing the values of existing is also not allowed
Object.freeze(barnie);
barnie.isGoodDog = true;
barnie.name = "Chapo";
console.log(barnie);

// *** seal ***
// => can't add new properties or methods
// => can change the existing ones
let marley = {
    name: "Marley",
    color: "brown"
}

Object.seal(marley)
marley.color = "grey"; // will change the existing value with the newly assigned
marley.isGoodDog = true; // won't add new property
console.log(marley);
