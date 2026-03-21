const input = document.getElementById("search-input")
const form = document.getElementById("form")
const gifContainer = document.getElementById("gif-container")
const deleteAll = document.getElementById("delete")

async function getGif(category) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${category}`)
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json()
    const gifUrl = data.data.images.original.url
    const img = document.createElement("img")
    img.src = gifUrl

    const gifDiv = document.createElement("div")
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "DELETE"
    deleteBtn.addEventListener("click", function () {
      gifDiv.remove()
    })
    gifDiv.appendChild(img)
    gifDiv.appendChild(deleteBtn)
    gifContainer.appendChild(gifDiv)

  } catch (error) {
    console.log(error)
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault()
  getGif(input.value)
})

deleteAll.addEventListener("click", function () {
  gifContainer.innerHTML = ""
})