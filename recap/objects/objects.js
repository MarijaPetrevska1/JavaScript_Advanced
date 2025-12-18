console.log(" ======== OBJECTS ========= ");

let dog = {
    name: "Sharko",
    color: "grey",
    age: 2,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    favouriteFoods: ["Carrot", "Meat", "Everything"],
    bark: function() {
        console.log(this.name + " says");
        console.log("AW AW AW");                
    }, 
    eat: function(food)
    {
        if(this.favouriteFoods.includes(food))
        {
            console.log("MIAM MIAN! My favourite.");            
        } 
        console.log("The dog is eating " + food);        
    }
};

console.log(dog.name);
console.log(dog["name"]);

dog.bark();
dog.eat("Everything");
dog.eat("Chips");

let oherDog = new Object();
otherDog.name = "Chapo";
otherDog["isStreetDog"] = true;

function Person(firstName, lastName, age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

let bob = new Person("Bob", "Bobsky", 55);
console.log(bob);

let fullName = bob.getFullName();
console.log(fullName);

bob.isStudent = true;
console.log(bob);





