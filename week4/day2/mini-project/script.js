const container = document.getElementById("container")
const characterName = document.getElementById("name")
const height = document.getElementById("height")
const gender = document.getElementById("gender")
const birth = document.getElementById("birth")
const home = document.getElementById("home")
const loading = document.getElementById("loading")
const find = document.getElementById("find")

async function getCharacter() {
  try {
    const randomNum = Math.floor(Math.random() * 83) + 1
    const response = await fetch(`https://www.swapi.tech/api/people/${randomNum}/`)
    if (!response.ok) {
      throw new Error("Something went wrong!")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

async function displayCharacter() {
  loading.style.display = "block"
  characterName.style.display = "none"
  height.style.display = "none"
  gender.style.display = "none"
  home.style.display = "none"
  birth.style.display = "none"

  const data = await getCharacter()
  if (!data) {
    container.textContent = "Oh No! That person isn't available."
    return
  }

  const homeworldResponse = await fetch(data.result.properties.homeworld)
  const homeworldData = await homeworldResponse.json()

  characterName.textContent = data.result.properties.name
  height.textContent = `Height: ${data.result.properties.height}`;
  gender.textContent = `Gender: ${data.result.properties.gender}`;
  birth.textContent = `Birth Year: ${data.result.properties.birth_year}`;
  home.textContent = `Home World: ${homeworldData.result.properties.name}`;

  loading.style.display = "none"
  characterName.style.display = "block"
  height.style.display = "block"
  gender.style.display = "block"
  home.style.display = "block"
  birth.style.display = "block"
}

find.addEventListener("click", function () {
  displayCharacter()
})

