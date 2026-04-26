const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.getBookById(req.params.bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving book', error });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, published_year } = req.body;
    const book = await Book.createBook(title, author, published_year);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, published_year } = req.body;
    const book = await Book.updateBook(req.params.bookId, title, author, published_year);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.deleteBook(req.params.bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };