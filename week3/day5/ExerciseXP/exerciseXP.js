

// Exercise 1 : Comparison
function compareToTen(num) {
  return new Promise(function (resolve, reject) {
    if (num <= 10) {
      resolve("It's in the range")
    } else {
      reject("It's out of the range")
    }
  });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Exercise 2 : Promises


let myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("success");
  }, 4000);
})
myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Exercise 3 : Resolve & Reject
let resolvePromise = Promise.resolve(3)
resolvePromise
  .then(result => console.log(result))
  .catch(error => console.log(error))

let rejectPromise = Promise.reject("Boo!")
rejectPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))