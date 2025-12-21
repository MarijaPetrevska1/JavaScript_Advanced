console.log(" ====== ASYNC / AWAIT ======= ");

// `async/await` is a modern way to handle asynchronous operations
//  in JavaScript
// It is built on top of Promises and provides a cleaner, 
// more readable syntax for writing asynchronous code
// Avoids deeply nested `.then()` chains (Promise chaining)

console.log("");
console.log("============ Basic Example of async/await ============");

function getDataPromise() {
    return new Promise ((resolve, reject) => {
        let response = {
            message: "Data fetched successfully !",
            statusCode: 200
        }
        if(response.statusCode >= 400) {
            reject("Fetching data failed.")
        }
        resolve(response)
    });
}

getDataPromise() 
    .then(data => console.log("Response object: ", data))
    .catch(error => console.log("ERROR: ", error))

//  === > Example with async/await

async function getData() {
    let response = {
        message: "Data fetched successfully!",
        statusCode: 200
    }
    return response;
}

async function processAsyncTask() {
    console.log("Fetching data started ....");
    let data = await getData();
    console.log("Fetching data finished ...");
    console.log("Here is the data");
    console.log(data);
}

processAsyncTask();

console.log("");
console.log("============ Fetch Example with async/await ============");

let apiUrl = "https://fakestoreapi.com/products/1";

fetch(apiUrl)
    .then(response => response.json())
    .then(product => console.log(product))
    .catch(error => console.log("ERROR !", error))
    .finally(() => console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`));
// NOTE: The try-catch block is used in JavaScript for handling unexpected errors !!!

let fetchProduct = async () => {
    try {
        let response = await fetch(apiUrl);
        let product = await response.json();
        return product;
    }
    catch(error) {
        console.log("ERROR OCCURED! ", error);
    }
    finally {
        console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`)
    }
}

(async () => {
    let product = await fetchProduct();
    // console.log(product);
})();

let getJokeAsync = async () => "Knock Knock! Who's there? Async! Async Who? Async Await :D NOT FUNNY!";

document.querySelector("button").addEventListener("click", async () => {
    let product = await fetchProduct();
    console.log(product);
    let joke = await getJokeAsync();
    console.log(joke);
})

console.log("");
console.log("============ Async/Await vs Promises (Steps example) ============");

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 3000);
    })
}

function step2() {
    throw new Error("Step 2 failed!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 2000);
    })
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    })
}

async function runSteps() {
    try {
        await step1();
        await step2();
        await step3();
    } catch (error) {
        console.log("ERROR !");
    }
}

runSteps();


console.log("===== End of script =====");


