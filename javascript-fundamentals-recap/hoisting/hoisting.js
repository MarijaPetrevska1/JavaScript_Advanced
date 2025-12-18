console.log(" ======= HOISTING ======= ");

// Hoisting is a JavaScript mechanism where variables, 
// function declarations, and classes are moved to the top of their scope
// before the code is executed.
// This means that you can use functions and variables before 
// they are declared

console.log("");
console.log("=========== Functions Hoisting ===========");

sayHello();
window.sayHello();

function sayHello() {
    console.log("Hello, I'm hoisted!");    
}
sayHello();

let sayHelloArrow = () => console.log("Hello from arrow!");

console.log("");
console.log("==== Variables Hoisting ====");

let student = "Bob";
const academy = "Qinshift Academy";

console.log(isVarHoisted);
var isVarHoisted = true;





