let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
  let user = client;
  client = "Betty";

  let shopping = groceries;

  groceries.totalPrice = "35$";
  groceries.other.paid = false;

  console.log("client:", client);
  console.log("user:", user);
  console.log("shopping:", shopping);
};

displayGroceries();
cloneGroceries();