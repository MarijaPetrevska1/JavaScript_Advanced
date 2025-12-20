console.log("================= HIGHER ORDER FUNCTIONS (PART 2) =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];


console.log("");
console.log("=== every ===");

const allPositive = numbers.every(n => n > 0);
console.log(allPositive);

console.log(students.every( s => s.age > 20));


console.log("");
console.log("========== some ==========");

const hasEvenNumber = numbers.some(n => n % 2 === 0);
console.log(hasEvenNumber);

console.log(students.some(s=>s.age<20));


console.log("");
console.log("========== find ==========");

const firstEvenNumber = numbers.find(n => n % 2 === 0 && n > 2);
console.log(firstEvenNumber);

console.log("");
console.log("========== findIndex ==========");

const indexNumberLargerThan40 = numbers.findIndex(n => n > 40);
console.log(indexNumberLargerThan40);


console.log("");
console.log("========== includes ==========");

console.log(numbers.includes(21));

const hasMarie = students.some(s => s.firstName === "Marie");
console.log(hasMarie);

console.log("");
console.log("========== flat ==========");

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(nestedArray);
const flattedenOneLevel = nestedArray.flat(1);
console.log(flattedenOneLevel);

const fullyFlattened = nestedArray.flat(Infinity);
console.log(fullyFlattened);


console.log("");
console.log("========== flatMap ==========");

const subjects = [
    { title: "JavaScript", topics: ["Objects", "Functions", "Promises"] },
    { title: "C#", topics: ["LINQ", "Delegates", "Async/Await"] },
    { title: "SQL", topics: ["Joins", "Indexes", "Transactions"] }
];

console.log(subjects.map(s=>s.topics.flat(1)));

console.log("");
console.log("========== split (for strings) ==========");

const sentence = "JavaScript is awesome!";
const words = sentence.split(" ");
console.log(words);

console.log("");
console.log("========== join ==========");

const joinedSentence = words.join(" ");
console.log(joinedSentence);

  
console.log("");
console.log("========== slice ==========");

const firstThreeNumbers = numbers.slice(0, 3);
console.log(firstThreeNumbers); // [5, 10, 15]


console.log("");
console.log("========== splice ==========");

const removedNumbers = numbers.splice(2, 2);
console.log(removedNumbers);
console.log(numbers);
let arr = [1, 2, 3, 4, 5];

let removed = arr.splice(2, 2);

console.log(arr);
// [1, 2, 5]

console.log(removed);
// [3, 4]

console.log("");
console.log("========== reverse ==========");
const numbersToReverse = [1, 2, 10, -5, 4, 8];
const reversedNumbers = numbersToReverse.reverse();
console.log(reversedNumbers);
