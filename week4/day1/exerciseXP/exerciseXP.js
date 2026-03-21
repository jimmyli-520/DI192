// Exercise 1 : Giphy API
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function getGif() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getGif();

//  Exercise 2 : Giphy API
async function getGif(q = "sun", limit = 10, offset = 2) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&offset=${offset}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

getGif()

// Exercise 3 : Async function

async function getMovie() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    if (!response.ok) {
      throw new Error("Something went wrong!")
    }
    const data = await response.json()
    console.log(data.result)
  } catch (error) {
    console.log(error)
  }
}

getMovie()

// Exercise 4: Analyze
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

//  Output: calling -> promise -> resolved

