//Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1)
people.splice(2, 1, "Jason")
people.push("Jimmy")
console, log(people, indexOf("Mary"))
const peopleCopy = people.slice(1, 3)
people.indexOf("Foo")
const last = people[people.length - 1]

// Part 2 - Loops
for (let name of people) {
  console.log(name)
}

for (let name of people) {
  console.log(name)
  if (name === "Devon")
    break
}


// Exercise 2 : Your favorite colors
let colors = ["blue", "red", "white", "grey", "green"]
for (let i = 0; i < colors.length; i++)
  console, log("My #" + (i + 1) + "choice is" + colors[i])

//Exercise 3 : Repeat the question
// 1
let number = Number(prompt("Enter a number"))
console.log(typeof number)

// 2
let number = Number(prompt("Enter a number"))
do {
  number = Number(prompt("Enter a new number"))
} while (number < 10)

// Exercise 4 : Building Management

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
}

// Step 2
console.log(building.numberOfFloors)

// Step 3
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor)

// Step 4
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])

// Step 5
let sarahRent = building.numberOfRoomsAndRent.sarah[1]
let davidRent = building.numberOfRoomsAndRent.david[1]
let danRent = building.numberOfRoomsAndRent.dan[1]

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200
}

//Exercise 5 : Family
// Step 1
let family = {
  firstName: "John",
  lastName: "Doe",
  city: "NYC"
}

// Step 2 - log keys
for (let name in family) {
  console.log(name)
}

// Step 3 - log values
for (let name in family) {
  console.log(family[name])
}

// Exercise 6 : Rudolf
let sentence = ""
for (let info in details) {
  sentence += info + " " + details[info] + " "
}
console.log(sentence)


//Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let letters = []
for (let letter of names) {
  letters.push(letter[0])
}

letters.sort()
let result = letters.join("")
console.log(result)