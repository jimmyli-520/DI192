function greetUser(greeting = '', username = "user") {
  if (greeting) {
    console.log(`${greeting}, ${username}!`);
  } else {
    console.log(`Go away, ${username}`)
  }

}

greetUser("Greeting", "fred");


function square(num) {
  return num ** 2
}

let mySqaure = square(4);
console.log(mySqaure + 8);

// if a function does not have a retirn statement it returns `undefined`

function blah() {
  console.log('blah'); // this is uneccessary
}


