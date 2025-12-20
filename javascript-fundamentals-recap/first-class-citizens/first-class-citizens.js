// OPTIONAL PARAMETERS
// if we don't pass the value for the parameter, 
// the default value will be used
// it can be a value of any type

function multiply(num1, num2 = 10)
{
    console.log(`Result: ${num * num2}`);    
}

console.log(" ===== FUNCTIONS - FIRST CLASS CITIZENS =====");

let greet = name => console.log(`Hello ${name}`);
greet("Darko");

function calculator(calculateFunc, num1, num2)
{
    return calculateFunc(num1, num2);
}

function sum(number1, number2)
{
    return number1 + number2;
}
let sumResult = calculator(sum, 5, 10);
let subtractResult =  calculator(function(num1, num2){
    return num1 - num2;
}, 100, 80);

console.log(calculator((x, y) => x * y, 30, 2))

function logFunction(func)
{
    func();
}

logFunction(() => console.log("Hello"));

function getOperation(operator) {
    switch(operator) {
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
        case "*":
            return (num1, num2) => num1 * num2;
        case "/":
            return (num1, num2) => num1 / num2;
        case "**":
            return (num1, num2)=> num1 ** num2;
        default:
            break;
    }
}

const divide = getOperation("/");
console.log(divide(10,2));

console.log(getOperation("**")(2,3));

function greetStudent(name) {
    console.log(`Hello ${name}`);    
}

greetStudent.firstName = "Bob";
greetStudent(greetStudent.firstName);

greetStudent.getFullName = lastName => greetStudent.firstName + " " + lastName;

console.log("");
console.log(" ------ Function Arguments ------ ");


function someFunction() {
    console.log(arguments);
    console.log(arguments.length);    
}

someFunction("Bob", "Jane", "Tom", "Jill", "Darko", 123)

function sumOfNumbers() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sumOfNumbers(10, 20, 30, 40));
console.log(sumOfNumbers(10, 20, 30, 40, 50, 60, 70, 80));

// NOTE: The `arguments` object is NOT available in arrow functions
// const test = () => console.log(arguments)
// test(123, 123) // ERROR!

function greet1(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet1("Ana", function () { 
    console.log("Nice to meet you!");    
})

setTimeout(() => {
    console.log("This runs later!");    
}, 1000);

let sayHello = function (name) {
    console.log(`Hello there ${name}`);    
};
sayHello("Bob");

let numberStatsFunctions = [
    (num) => num > 0 ? "Positive" : "Negative",
    (num) => num % 2 === 0 ? "Odd" : "Even",
    (num) => num >= 0 ? num.toString().length : num.toString().length - 1
];
numberStatsFunctions[0](2);
numberStatsFunctions[1](2);
numberStatsFunctions[2](2);

function calculator (calculateFunc, number1, number2) {
    return calculateFunc(number1, number2);
}
function sum (number1, number2) {
    return number1 - number2;
}
console.log(calculator(sum, 3, 6));
console.log(calculator(difference, 40, 12));

function calculator1 (operation)
{
    switch(operation) {
        case "+":
            return function(number1, number2) {
                return number1 + number2;
            };
            break;
        case "-":
            return function (number1, number2) {
                return number1 - number2;
            };
            break;
        default: 
            console.log("ERROR");  
            return null;          
    }
}
