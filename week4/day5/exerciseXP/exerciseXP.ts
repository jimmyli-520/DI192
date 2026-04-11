// Exercise 1: Intersection Types
type Person = {
  name: string;
  age: number;
}

type Address = {
  street: string;
  city: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "John",
  age: 30,
  street: "123 Main St",
  city: "New York"
}

// Exercise 2: Type Guards with Union Types
function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return " This is a number"
  };
  return "This is a string"
}

// Exercise 3: Type Casting
let someValue: any = "This is a string"
const strValue = someValue as string;
console.log(strValue.toUpperCase());

// Exercise 4: Type Assertions with Union Types
function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string
}

// Exercise 5: Generic Constraints
function logLength<T extends { length: number }>(param: T) {
  console.log(param.length)
}

// Exercise 6: Intersection Types and Type Guards
type Person = {
  name: string;
  age: number;
}

type Job = {
  position: string;
  department: string;
}

type Employee = Person & Job
function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return "You are the manager"
  }
  return "You are the developer"
}

// Exercise 7: Type Assertions and Generic Constraints
function formatInput<T extends { toString(): string }>(param: T): string {
  return `Formatted input: ${param.toString()}`
}