const form = document.querySelector("form")
console.log(form)
const firstName = document.querySelector("#fname")
console.log(firstName)
const lastName = document.querySelector("#lname")
console.log(lastName)
const firstNameByName = document.querySelector("[name='firstname' ]")
console.log(firstNameByName)
const lastNameByName = document.querySelector("[name='lastname']")
console.log(lastNameByName)
form.addEventListener("submit", function (event) {
  event.preventDefault()
  const firstNameValue = firstName.value
  const lastNameValue = lastName.value
  if (firstNameValue !== "" && lastNameValue !== "") {
    const firstNameLi = document.createElement("li")
    firstNameLi.textContent = firstNameValue
    const lastNameLi = document.createElement("li")
    lastNameLi.textContent = lastNameValue
    const ul = document.querySelector(".usersAnswer")
    ul.appendChild(firstNameLi)
    ul.appendChild(lastNameLi)
  }
})
