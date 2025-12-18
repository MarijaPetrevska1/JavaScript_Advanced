console.log("ARROW FUNCTIONS");

function sayHello () {
    console.log("Hello!");    
}

let sayHelloAnonymous = function () {
    console.log("Hello Anonymous!");    
}
let sayHelloArrow = () => {
    console.log("Hello Arrow!");    
}
sayHelloArrow();

let sayHelloArrowOneLine = () => console.log("Hello Arrow(one liner)!");

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
const getRandom = () => Math.floor(Math.random() * 100);
let randomNum = getRandom();
console.log(randomNum);

function isEven(number) {
    return number % 2 === 0;
}

const isNumberEven = number => number % 2 === 0;
console.log("The numbere 68 is even: ", isNumberEven(68));

const sum = (num1, num2) => num1 + num2;
console.log(sum);

const getMaxNumber = (num1, num2) => {
    if(num1 > num2)
    {
        return num1;
    }
}
console.log(getMaxNumber(10,80));

// Arrow Function in a fetch
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);        
    })
    .catch(function(error) {
        console.error("ERROR OCCURED!", error);
    });

    fetch (postsUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        
