console.log("=================== SCOPES ===================");

// GLOBAL SCOPE
// => variables and functions declared outside of any function or block have global scope
// => they can be accessed from anywhere within the script
let globalNumber = 12345;

function printGlobalNumber() {
    globalNumber = 5555;
    console.log(globalNumber);
}

printGlobalNumber();

// LOCAL SCOPE  (Function Scope)
// => variables/functions declared within a function have local scope, meaning they can only be accessed within that function

// Example 1
function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log("The result is ", result);
}

localScope(200)
// console.log(localNumber) // ERROR

// BLOCK SCOPE
// => variables declared with let or const within a block (inside {}) are only accessible within that block

let globalString = "This is string";
if(50 < 100) {
    let blockNumber = 50 + 100;
    console.log(blockNumber);    
    globalNumber = "Nesto";
}
// console.log(blockNumber); // ERROR !
console.log(globalString);