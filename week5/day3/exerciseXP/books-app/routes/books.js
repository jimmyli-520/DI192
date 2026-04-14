// routes/books.js
const express = require('express');
const router = express.Router();

const books = [];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: 'Please provide both title and author'
    });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  if (!title || !author) {
    return res.status(400).json({
      message: 'Please provide both title and author'
    });
  }

  book.title = title;
  book.author = author;

  res.json(book);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.json({
    message: 'Book deleted successfully',
    deletedBook: deletedBook[0]
  });
});

module.exports = router;