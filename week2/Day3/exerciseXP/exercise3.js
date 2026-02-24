// Step 1 - global variable
let allBoldItems;

// Step 2 - collect all bold items
function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong")
}

// Step 3 - change color to blue
function highlight() {
  allBoldItems.forEach(function (item) {
    item.style.color = "blue"
  })
}

// Step 4 - change color back to black
function returnItemsToDefault() {
  allBoldItems.forEach(function (item) {
    item.style.color = "black"
  })
}

// Step 5 - event listeners on the paragraph
const p = document.querySelector("p")

p.addEventListener("mouseover", function () {
  getBoldItems()
  highlight()
})

p.addEventListener("mouseout", function () {
  getBoldItems()
  returnItemsToDefault()
})