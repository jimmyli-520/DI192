// Step 2.1 - Retrieve the div
const container = document.getElementById("container")
console.log(container)

// Step 2.2 - Change "Pete" to "Richard"
document.querySelectorAll("ul")[0].querySelectorAll("li")[1].innerText = "Richard"

// Step 2.3 - Delete second <li> of second <ul> (Sarah)
document.querySelectorAll("ul")[1].querySelectorAll("li")[1].remove()

// Step 2.4 - Change first <li> of each <ul> to your name
const lists = document.querySelectorAll("ul")
for (let list of lists) {
  list.querySelectorAll("li")[0].innerText = "Jimmy"
}

// Step 3.1 - Add student_list class to both <ul>s
for (let list of lists) {
  list.classList.add("student_list")
}

// Step 3.2 - Add university and attendance to first <ul>
lists[0].classList.add("university", "attendance")

// Step 4.1 - Add background color and padding to div
container.style.backgroundColor = "lightblue"
container.style.padding = "20px"

// Step 4.2 - Hide "Dan"
document.querySelectorAll("ul")[1].querySelectorAll("li")[2].style.display = "none"

// Step 4.3 - Add border to "Richard"
document.querySelectorAll("ul")[0].querySelectorAll("li")[1].style.border = "1px solid black"

// Step 4.4 - Change font size of body
document.body.style.fontSize = "20px"

// Bonus - Alert if background is lightblue
if (container.style.backgroundColor === "lightblue") {
  alert("Hello John and Richard")
}