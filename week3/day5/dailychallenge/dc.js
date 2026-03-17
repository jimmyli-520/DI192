// 1st daily challenge
function makeAllCaps(words) {
  return new Promise(function (resolve, reject) {
    if (words.every(word => typeof word === "string")) {
      return resolve(words.map(word => word.toUpperCase()))
    } else {
      reject("Not all words are strings!")
    }
  });
}

function sortWords(words) {
  return new Promise(function (resolve, reject) {
    if (words.length > 4) {
      resolve(words.sort())
    } else {
      reject("Words is less than 4 letters.")
    }
  });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log(error))

