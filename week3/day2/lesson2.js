let myObj = {
    name: "John",
    lastName: "Doe",
    age: 25,
    friends: ["Mark", "Lucie", "Ana"]
}

myObj.entries(myObj).forEach((Val, index) => {
    console.log(`The ${index} key is : ${val[0]}.`)
    console.log(`The ${index} values is ${val[1]}`)
})

// destructuring
const address = {
    street: 'Galailee Blvd',
    number: '742',
    city: 'Kalamazoo',
    state: 'MI',
    zip: '49007',
};

// instread of this:
// const street = address.street
// const number = adress.number
// cosnt city = adress.city

// we can do this:
const { street, number, city } = address

console.log(street)
console.log(number)
console.log(city)

// Nested Object Destructuring


// Object destructuring used as an assignment to a function
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0)); // meaning "or" -> if there is no math score, put "0"
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

// With Destructuring
function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary(student);

// Spread operator

const address1 = address // new name for the same object
const address2 = { ...address } // makes a copy. 2 different objects

console.log(address === address1) // ture
console.log(address === address2) // false

// Classes
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
