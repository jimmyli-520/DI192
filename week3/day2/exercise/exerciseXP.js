// Exercise 1 : Location
Output: I am John Doe from Vancouver, Canada.Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 };

//  1 - turn object into array
const usersArray = Object.entries(users);
console.log(usersArray);

//  2 - multiply each ID by 2
const doubledUsers = Object.entries(users).map(([username, id]) => {
  return [username, id * 2];
});
console.log(doubledUsers);

// Exercise 4 : Person class
Output: object

// Exercise 5 : Dog class
//option #2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Exercise 6 : Challenges
[2] === [2] // FALSE
{ } === {}   // FALSE


// Part 2 — What is the value of `number`?

console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5


// Part 3 — The Classes
//  1 - Animal class
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

//  2 - Mammal class
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

//  3 - farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));


