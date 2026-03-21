const button = document.getElementById("btn")
const jokeDisplay = document.getElementById("joke")

async function getJoke(category) {
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
  if (!response.ok) {
    throw new Error("Something went wrong!")
  }
  const data = await response.json()
  return data
}

async function displayJoke() {
  const joke = await getJoke("science")
  jokeDisplay.textContent = joke.value
}

button.addEventListener("click", function () {
  displayJoke()
})