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
