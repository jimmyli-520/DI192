// Exercise 1: Class with Access Modifiers
class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;


  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo() {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

// Exercise 2: Readonly Properties in a Class
class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo() {
    return `Name: ${this.name}, Price:${this.price}`
  }
}

const p = new Product(1, "laptop", 99)
p.id = 9;
//  Cannot assign to 'id' because it is a read-only property.

//  Exercise 3: Class Inheritance
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  makeSound(): string {
    return "meow"
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  override makeSound(): string {
    return "bark"
  }
}

const myDog = new Dog("Bark");
myDog.makeSound()

// Exercise 4: Static Properties and Methods
class Calculator {
  static add(a: number, b: number): number {
    return a + b
  }
  static subtract(a: number, b: number): number {
    return a - b
  }
}
Calculator.add(5, 3)
Calculator.subtract(9, 3)

// Exercise 5: Extending Interfaces with Optional and Readonly Properties
interface User {
  readonly id: number;
  name: string;
  email: string;
}
interface PremiumUser extends User {
  membershipLevel?: string;
}


function printUserDetails(user: PremiumUser): void {
  console.log(`${user.name},${user.email},${user.membershipLevel}`)
}

const myUser = {
  id: 123,
  name: "Lana",
  email: "123@gmail.com",
  membershipLevel: "Gold"
}
printUserDetails(myUser)