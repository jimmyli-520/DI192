// Step 2 & 3 - Create the allBooks array with 2 books
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    alreadyRead: true
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    alreadyRead: false
  }
]

// Step 4 - Render each book in the section
const section = document.querySelector(".listBooks")

for (let book of allBooks) {
  // Create a div for each book
  const bookDiv = document.createElement("div")

  // Create and add the title and author text
  const bookInfo = document.createElement("p")
  bookInfo.textContent = book.title + " written by " + book.author

  // Create and add the image
  const bookImage = document.createElement("img")
  bookImage.src = book.image
  bookImage.width = 100

  // If already read, set color to red
  if (book.alreadyRead) {
    bookInfo.style.color = "red"
  }

  // Append everything to the div
  bookDiv.appendChild(bookImage)
  bookDiv.appendChild(bookInfo)

  // Append the div to the section
  section.appendChild(bookDiv)
}