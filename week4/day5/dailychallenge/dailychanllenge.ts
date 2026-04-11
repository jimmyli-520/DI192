type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

function handleData(arr: (User | Product | Order)[]): string {
  for (const item of arr) {
    if (item.type === "user") {
      return `Hello, ${item.name}, you are ${item.age} years old`
    }
    if (item.type === "product") {
      return `The product ID is ${item.id}, and the price is ${item.price}`
    }
    if (item.type === "order") {
      return `Your orders ID is ${item.orderId} and the amount is ${item.amount}`
    }
  }
  return "Unknown type"
}