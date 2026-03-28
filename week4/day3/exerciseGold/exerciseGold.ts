// Exercise 1: Union Types
function processValue(value: string | number): string {
    if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    } else {
        return value.split("").reverse().join("");
    }
}

// Test the function with different inputs
console.log(processValue(100));       // Output: $100.00
console.log(processValue(49.9));      // Output: $49.90
console.log(processValue(1000.5));    // Output: $1000.50
console.log(processValue("hello"));   // Output: olleh
console.log(processValue("TypeScript")); // Output: tpircSepyT
console.log(processValue("Alice"));   // Output: ecilA

// Exercise 2: Array Type Annotations
function sumNumbersInArray(arr: (number | string)[]): number {
    let sum: number = 0;
    for (let item of arr) {
        if (typeof item === "number") {
            sum += item;
        }
    }
    return sum;
}

// Test the function with different arrays
console.log(sumNumbersInArray([1, 2, 3, 4, 5]));                     // Output: 15
console.log(sumNumbersInArray(["hello", "world", 10, 20]));           // Output: 30
console.log(sumNumbersInArray([1, "TypeScript", 2, "is", 3, "fun"])); // Output: 6
console.log(sumNumbersInArray(["a", "b", "c"]));                      // Output: 0
console.log(sumNumbersInArray([10.5, "Alice", 20.5, "Bob", 30]));     // Output: 61

// Exercise 3: Type Aliases
// Define the type alias
type AdvancedUser = {
    name: string;
    age: number;
    address?: string; // optional property
}

// Implement the function
function introduceAdvancedUser(user: AdvancedUser): string {
    if (user.address) {
        return `Hi, my name is ${user.name}, I am ${user.age} years old and I live at ${user.address}.`;
    } else {
        return `Hi, my name is ${user.name} and I am ${user.age} years old.`;
    }
}

// Test with address
const user1: AdvancedUser = {
    name: "Alice",
    age: 25,
    address: "123 Main Street, New York"
};

// Test without address
const user2: AdvancedUser = {
    name: "Bob",
    age: 30
};

console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));

// Exercise 4: Optional Parameters
// Function with optional parameter
function welcomeUser(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

// Test with custom greeting
console.log(welcomeUser("Alice", "Good morning")); // Output: Good morning, Alice!
console.log(welcomeUser("Bob", "Welcome"));        // Output: Welcome, Bob!
console.log(welcomeUser("Charlie", "Hey"));        // Output: Hey, Charlie!

// Test without greeting (uses default)
console.log(welcomeUser("Alice"));                 // Output: Hello, Alice!
console.log(welcomeUser("Bob"));                   // Output: Hello, Bob!