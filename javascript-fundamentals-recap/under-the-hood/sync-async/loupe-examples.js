// http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// 1) Sync execution

function first () {
    console.log("First thing");
}

function second () {
    console.log("Second thing");
    // first();   
    // first(); 
}

console.log("Begin");
first();
second();
console.log("End");

// 2) Async execution

console.log("Program started ... ");

setTimeout(function () {
    console.log("This is printed after 15 seconds.");
    
}, 15000);
console.log("Processing ... ");

// Example 2: Handling Event 
function handleClick() {
    console.log("The button is clicked!");
    
}
$.on("button", "click", handleClick);

// Example 3: Callback function

function performAsyncOperation (callback) {
    console.log("Async operation started.");
    setTimeout(function() {
        callback("Async operation completed.");
    }, 1000);
    console.log("....Processing....");
}
performAsyncOperation(console.log);



