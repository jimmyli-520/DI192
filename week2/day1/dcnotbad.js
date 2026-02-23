// Step 1
let sentence = "This movie is not that bad, I like it"

// Step 2
let wordNot = sentence.indexOf("not")

// Step 3
let wordBad = sentence.indexOf("bad")

// Step 4 & 5
if (wordBad > wordNot) {
    let result = sentence.replace(sentence.slice(wordNot, wordBad + 3), "good")
    console.log(result)
} else {
    console.log(sentence)
}