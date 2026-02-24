// Grab the animated box
const animate = document.querySelector("#animate")

// Track the current position of the box
let position = 0

// Store the interval so we can clear it later
let interval

function myMove() {
  // Clear any existing interval before starting a new one
  clearInterval(interval)

  // Reset position to the start
  position = 0
  animate.style.left = "0px"

  // Move the box 1px to the right every millisecond
  interval = setInterval(function () {
    // The container is 400px wide and the box is 50px wide
    if (position >= 350) {
      clearInterval(interval)
    } else {
      position++
      animate.style.left = position + "px"
    }
  }, 1)
}

