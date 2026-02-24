// Grab the container and button
const container = document.querySelector("#container")
const clearBtn = document.querySelector("#clear")

// ─────────────────────────────────────────────
// PART I
// Call a function after 2 seconds that alerts "Hello World"
// ─────────────────────────────────────────────
setTimeout(function () {
  alert("Hello World")
}, 2000)


// ─────────────────────────────────────────────
// PART II
// Call a function after 2 seconds that adds a <p> to the container
// ─────────────────────────────────────────────
setTimeout(function () {
  const p = document.createElement("p")
  p.textContent = "Hello World"
  container.appendChild(p)
}, 2000)


// ─────────────────────────────────────────────
// PART III
// Call a function every 2 seconds that adds a <p> to the container
// ─────────────────────────────────────────────
const interval = setInterval(function () {
  // Add a new paragraph every 2 seconds
  const p = document.createElement("p")
  p.textContent = "Hello World"
  container.appendChild(p)

  // Count how many paragraphs are in the container
  const allParagraphs = container.querySelectorAll("p")

  // If there are 5 paragraphs, clear the interval automatically
  if (allParagraphs.length >= 5) {
    clearInterval(interval)
  }
}, 2000)

// Clear the interval when the button is clicked
clearBtn.addEventListener("click", function () {
  clearInterval(interval)
})