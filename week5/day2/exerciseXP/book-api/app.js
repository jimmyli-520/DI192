const express = require('express');
const app = express();

app.use(express.json());

const PORT = 4000;

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// ✅ ALWAYS LAST
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});