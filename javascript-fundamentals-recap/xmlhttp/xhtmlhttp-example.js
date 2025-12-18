console.log("");
console.log("================ Using XMLHttpRequest ================");
// The `XMLHttpRequest` object is an older way for establishing interaction with servers

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.chucknorris.io/jokes/random");

xhr.onload = function () {
    if(xhr.status >= 200 && xhr.status < 300)
    {
        console.log("The request succeded!");
        console.log(xhr.response);
        let parsedResponse = JSON.parse(xhr.response);
        console.log(parsedResponse);                
    } else {
        console.log("The request failed!");
        console.log(xhr.response);
        console.log(xhr.responseText);        
    }
}

xhr.send();