console.log(" ======= FUNCTIONS ======= ");

function sayHello() {
    console.log("Hello!");    
}

let hello = sayHello();
console.log(hello);

function greet (firstName, lastName)
{
    console.log(`Hello ${firstName} ${lastName}`);    
}
greet();
greet("Bob", "Bobsky");

function getPI(){
    return Math.PI;
}
getPI();
const pi = getPI();
console.log(pi);

function multiply(num1, num2)
{
    return num1 * num2;
}
console.log(multiply);


