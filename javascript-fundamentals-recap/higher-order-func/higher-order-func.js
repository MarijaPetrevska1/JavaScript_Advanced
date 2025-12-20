console.log(" === HIGHER ORDER FUNCTIONS ==== ");

// Test data

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];

console.log("");
console.log(" ==== forEach ==== ");


numbers.forEach(num => console.log(num));

students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`);
    if(student.age < 21) {
        console.log("The student is underaged.");        
    }
});

console.log("");
console.log(" ====== filter ====== ");

const evenNumbersResult = [];
for(const number of numbers) {
    if(number % 2 === 0) {
        evenNumbersResult.push(number);
    }
}

console.log(evenNumbersResult);

function checkEvenNumber(number) {
    if(number % 2 === 0) {
        return true;
    }
    return false;
}

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const femaleStudents = students.filter(student => student.gender === "Female");
console.log(femaleStudents);

const femaleStudents2 = students.filter(function (student) {
    return student.gender === "Female";
})

console.log("");
console.log(" ===== map ===== ");

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const studentFullName = students.map(s => `${s.firstName} ${s.lastName}`);
console.log(studentFullName);

// ===> Combining filter() and map()
// EXAMPLE: Get students full names of all the female students
const femaleStudentsFullNames = students.filter(s=> s.gender === "Female").map(s=> `${s.firstName} ${s.lastName}`);
console.log(femaleStudentsFullNames);

console.log("");
console.log("========== reduce ==========");

const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumOfNumbers);
console.log(sumOfNumbers/numbers.length);

const studentsAverage = students.reduce((acc, curr) => acc + curr.age, 0);

console.log(sumOfNumbers);
const studentsAge = students.reduce((acc, curr) => {
    acc += curr.age
}, 0) / students.length;


console.log("");
console.log("========== sort ==========");

const sortingNumbersArray = [-5, 3, 20, -300, 1000, 55, 33, 100, 0];

// Sorting numbers
sortingNumbersArray.sort((a,b) => b-a);
console.log(sortingNumbersArray);

students.sort((a,b) => a.age - b.age);
students.sort((a,b) => b.age - a.age);
console.log(students);

// Sorting with strings
students.sort((a,b) => a.firstName.localeCompare(b.firstName));
students.sort((a,b) => b.firstName.localeCompare(a.firstName));

const newArray = students;
newArray.push(123);
console.log(students);

