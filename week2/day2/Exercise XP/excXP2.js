// Exercise 1 : Find the numbers divisible by 23

const displayNumbersDivisible = () => {
  let sum = 0
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i)
      sum += i
    }
  }
  console.log(sum)
}

displayNumbersDivisible()


// Exercise 2 : Shopping List
const stock = {
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
}

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
}

const shoppingList = [“banana”, “orange”, “apple”];
const myBill = () => {
  let total = 0
  for (let item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item]
      // bonus Bonus: If the item is in stock, decrease the item’s stock by 1
      stock[item] -= 1
    }
  }
  return total
}
console.log(myBill())


// Exercise 4 : Vacations Costs

// 1. Define a function called hotelCost().

const hotelCost = () => {
  let nights
  do {
    nights = Number(prompt('How many nights?'))
  } while (!nights || isNaN(nights))
  return nights * 140
}

// 2. Define a function called planeRideCost().

const planeRideCost = () => {
  let destination
  do {
    destination = prompt('Where are you going?')
  } while (!destination)
  if (destination === 'London')
    return (183)
  else if (destination === 'Paris')
    return (220)
  else
    return (300)
}

// 3. Define a function called rentalCarCost().

const rentalCarCost = () => {
  let days
  do {
    days = Number(prompt('How many days?'))
  } while (!days || isNaN(days))

  let total = days * 40
  if (days > 10) {
    total = total * 0.95
  }
  return total
}

// 4. Define a function called totalVacationCost()

const totalVacationCost = () => {
  const hotel = hotelCost()
  const plane = planeRideCost()
  const car = rentalCarCost()
  console.log(`The hotel cost: ${hotel}, the plane cost: ${plane}, the car cost: ${car}`)
  return hotel + plane + car
}
totalVacationCost()
