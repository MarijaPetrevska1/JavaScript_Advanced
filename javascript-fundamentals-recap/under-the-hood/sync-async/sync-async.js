console.log("");
console.log("=============== Synchronous and asynchronous executing ===============");
// => JAVASCRIPT IS SINGLE THREADED !!! 

console.log("");
console.log("=============== Synchronous ===============");

function first() {
    console.log("First thing!");
}

function second() {
    console.log("Second thing!");
}

function fibonacci (n) {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

let fibonacciResult = fibonacci(40);
console.log(fibonacciResult);

first();
second();


console.log("");
console.log("=============== Asynchronous ===============");

// ===> Typical async operation => api call using fetch
fetch("https://dummyjson.com/products/1")
    .then(response => response.json())
    .then(product => console.log("Here is the product", product))
console.log("This is printed after the product! (or not) ");

// Example: Handling events (async operation)
document.querySelector("button").addEventListener("click", () => {
    console.log("Button is clicked!");
})

// ===> Built in functions that execute asynchronously
setTimeout(() => {
    console.log("This is printed after 4 seconds.");    
}, 4000);

// setInterval
// => executes a function (first argument) repeatedly 
// on a specified time interval (second argument)

setInterval(() => {
    console.log("This is printed every 3 seconds.");
}, 3000);

let intervalId = setInterval(() => {
    console.log("This is printed every seconds!");    
}, 3000)


function greet(name) {
    setTimeout(() => {
        console.log(`Hello ${name}`);        
    }, 3500);
}
greet("Frose");
console.log("This is printed second ?! ");

console.log(1);
console.log(2);
console.log(3);
// Result
// 1
// 2
// 3

setTimeout(() => console.log(4), 1000);
console.log(5);
setTimeout(() => console.log(6), 2000);
// Result
// 5
// 4
// 6