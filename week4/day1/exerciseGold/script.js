// Exercise 1

async function getGif() {
  try {
    const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()

    const gifUrl = data.data.images.original.url
    const img = document.createElement("img")
    img.src = gifUrl

    const container = document.getElementById("gif")
    container.appendChild(img)

  } catch (error) {
    console.log(error)
  }
}

getGif()


// Exercise 2

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url)
        return await response.json()
      })
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log("ooooooop")
  }
}

