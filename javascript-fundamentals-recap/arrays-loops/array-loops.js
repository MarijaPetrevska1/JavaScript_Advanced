console.log(" ======== Arrays ======== ");

let mixedArray = [true, 234, "String", NaN, undefined, 12_324_131];
let testArray = [1, 23, 124354, 134_534_534, 43, 423, 4343];
console.log(testArray[0]);
console.log(testArray.length);

testArray.push(123);
console.log(testArray);
testArray.push(123, 1234, 1235);

testArray.unshift(11111);
let testItem = testArray.pop();
let firstItem = testArray.shift();

testArray.splice(3, 1, 1_000_000);
testArray.splice(4);

let testArrayTwo = [111, 222, 333, 444, 555];
console.log(testArrayTwo);

console.log("");
console.log("==== Storing complex data types in arrays ====");

let objectsArray = [
    {id: 1, firstName: "Bob", lastName: "Bobski"},
    {id: 2, firstName: "Boba", lastName: "Bobski"}
];

console.log(objectsArray);

function sum(num1, num2)
{
    return num1+num2;
}
function subtract(num1, num2)
{
    return num1-num2;
}

let functionsArray = [
    sum, 
    subtract
];

console.log("Loops");
console.log("");
console.log("===== WHILE ======");
let whileTestArray = [1, 2, 3, 4, 5];
let counter = 0;
while(counter < whileTestArray.length)
{
    console.log(whileTestArray[counter]);
    counter++;
}

// FOR

console.log(" =====  for ======");

let students = ["Simona", "David", "Sandra", "Angel", "Robert"];
for(let i=0; i<students.length; i++)
{
    console.log(`${i+1}.${students[i]}`);    
}

// FOR OF

console.log("FOR OF");

for(let student of students)
{
    if(student.startsWith("A"))
    {
        console.log("The students "+student+" starts with letter A.");
        continue;
    }
    console.log(student);    
}

console.log("");
console.log(" break and continue");













