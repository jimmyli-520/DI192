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


// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const jsObject = JSON.parse(morse);
    if (Object.keys(jsObject).length === 0) {
      reject("This object is empty")
    } else { resolve(jsObject) }
  });
}



function toMorse(morseJs) {
  return new Promise((resolve, reject) => {
    let user = prompt("Please enter a word or a sentence:").toLowerCase();
    if (user.split("").every(char => morseJs[char] !== undefined)) {
      resolve(user.split("").map(char => morseJs[char]))
    } else { reject("Character doesn't exit!") }
  })
}

function joinWords(morseTranslation) {
  const joined = morseTranslation.join("\n")
  const result = document.getElementById("result")
  result.textContent = joined
}

toJs()
  .then(morseJs => toMorse(morseJs))
  .then((result) => joinWords(result))
  .catch(error => console.log(error))

