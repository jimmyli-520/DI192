// Step 2 - Change id from navBar to socialNetworkNavigation
const navBar = document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")

// Step 3.1 - Create a new <li> element
const newLi = document.createElement("li")

// Step 3.2 - Create a text node with "Logout"
const logoutText = document.createTextNode("Logout")

// Step 3.3 - Append the text node to the <li>
newLi.appendChild(logoutText)

// Step 3.4 - Append the <li> to the <ul>
const ul = document.querySelector("ul")
ul.appendChild(newLi)

// Step 4 - Retrieve first and last <li> and display their text
const firstLi = ul.firstElementChild
const lastLi = ul.lastElementChild
console.log(firstLi.textContent)
console.log(lastLi.textContent)