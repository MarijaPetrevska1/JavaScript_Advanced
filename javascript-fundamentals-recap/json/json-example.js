console.log("===== JSON (JavaScript Object Notation ====== ");

console.log("");
console.log(" ====== Create JSON from JavaScript Object ====== ");

let jsObject = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 34,
    isStudent: true,
    favouriteSubjects: [
        "JavaScript",
        "C#"
    ], 
    printInfo: function () {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
    }
}

console.log(jsObject);
console.log(typeof jsObject);
jsObject.printInfo();

let jsonString = JSON.stringify(jsObject);
console.log(jsonString);


console.log("================ Create JavaScript Object from JSON ================");
let courseJson = `
    {
        "trainer": "John Doe",
        "assistant": "Jane Doe",
        "students": [
            "Bob",
            "Samantha",
            "Chris",
            "Jill",
            "Greg",
            "Maria",
            "Tom",
            "Sue"
        ],
        "academy": "Code"
    }
`;

// ===> Deserialize JSON to JavaScript object  
let jsonObject = JSON.parse(courseJson);
console.log(jsonObject);
console.log(jsonObject.trainer);