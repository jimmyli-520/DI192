// Exercise 1 : Scope

// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
    the alert shows: inside the funcOne function 3

// with const instead of let ?
TypeError: Assignment to constant variable.


//#2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
Answer: inside the funcThree function 0
          inside the funcThree function 5
// with const instead of let ?
Answer: TypeError: Assignment to constant variable.



//#3
function funcFour() {
  window.a = "hello";
}


function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

Answer: inside the funcFive function 5


////#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
Ansswer: inside the funcSix function test

// with const instead of let ?
Ansswer: TypeError: Assignment to constant variable


//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
Answer: in the if block 5
        outside of the if block 2

// with const instead of let ?
Answer: in the if block 5
        outside of the if block 2




// Exercise 2 : Ternary operator
const experiencePoints = winBattle() ? 10 : 1


// Exercise 3 : Is it a string ?
const isString = value => typeof value === "string";


// Exercise 4 : Find the sum
const sum = (a, b) => a + b;

// Exercise 5 : Kg and grams

// Function Declaration
function kgToGrams(kg) {
  return kg * 1000;
}
console.log(kgToGrams(2));


// Function Expression
const kgToGramsExp = function (kg) {
  return kg * 1000;
};
console.log(kgToGramsExp(3));


// Function declarations are hoisted, but function expressions are not.


// One-line Arrow Function
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(5));


// Exercise 6 : Fortune teller
((children, partnerName, location, jobTitle) => {
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
})();

// Exercise 8 : Juice Bar

// Part 1
function makeJuice(size) {

  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} drink juice, containing ${ing1}, ${ing2}, ${ing3}.`;

    const p = document.createElement("p");
    p.textContent = sentence;
    document.body.appendChild(p);
  }

  // Invoke inner function ONCE
  addIngredients("apple", "banana", "mango");
}

// Invoke outer function
makeJuice("large");

// Part 2
function makeJuice(size) {

  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} drink juice, containing ${ingredients.join(", ")}.`;

    const p = document.createElement("p");
    p.textContent = sentence;
    document.body.appendChild(p);
  }

  // Invoke addIngredients TWICE (6 ingredients)
  addIngredients("apple", "banana", "mango");
  addIngredients("orange", "pineapple", "kiwi");

  // Invoke displayJuice ONCE
  displayJuice();
}

// Invoke outer function
makeJuice("medium");