console.log(" ======= ANONYMOUS FUNCTIONS ======= ");

document.querySelector("button").addEventListener("click", function () {
    console.log("Button is clicked!");    
})

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
    .then(function (response) {
        const parsedData = response.json();
        return parsedData;
    })
    .then(function(data){

    })
    .catch(function(error){
        console.error("ERROR OCCURED !", error);
    });

let greet = function(name) {
    console.log(`Hello ${name} !`);    
}

console.log(typeof greet);
greet("Bob");

let functionTwo = function () {
    console.log("Do something");    
}

