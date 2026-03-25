// Exercise 1: Hello, World! Program
console.log("Hello, World!")


// Exercise 2: Type Annotations
let fname: string = "Lana"
let age: number = 26
let isStudent: boolean = true
console.log(`Hello ${fname} is ${age} years old, and she's a student ${isStudent}`)

// Exercise 3: Union Types
let id: string | number = "Lana"
console.log(id)
id = 26
console.log(id)

// Exercise 4: Control Flow with if...else
function checkNumber(num: number): string {
  if (num > 0)
    return "positive"
  else if (num < 0)
    return "negative"
  else
    return "0"
}


// Exercise 5: Tuple Types
function getDetails(fname: string, age: number): [string, number, string] {
  return [fname, age, `Hello,${fname}! You are ${age} years old.`]
}

const details = getDetails("Alice", 25);
console.log(details);

// Exercise 6: Object Type Annotations
type Person = {
  name: string;
  age: number;
}

function createPerson(name: string, age: number): Person {
  return {
    name: name,
    age: age
  }
}
const person = createPerson("Alice", 25)
console.log(person)


// Exercise 7: Type Assertions
// 1. Get the element from the DOM and apply type assertion
const inputElement = document.getElementById("myInput") as HTMLInputElement;

// 2. Access and manipulate the element's properties
inputElement.value = "Hello, TypeScript!";

// 3. Log the value to confirm
console.log(inputElement.value);

// Exercise 8: switch Statement with Complex Conditions
function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}

// Test the function with different roles
console.log(getAction("admin"));   // Output: Manage users and settings
console.log(getAction("editor"));  // Output: Edit content
console.log(getAction("viewer"));  // Output: View content
console.log(getAction("guest"));   // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

// Exercise 9: Function Overloading with Default Parameters
// Function overload signatures
function greet(name: string): string;
function greet(): string;

// Function implementation
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, stranger!";
  }
}

// Test the function
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet());        // Output: Hello, stranger!