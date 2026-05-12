// src/components/BookList.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../selectors/booksSelectors';

const genreSelectorMap = {
  All:              selectBooks,
  Horror:           selectHorrorBooks,
  Fantasy:          selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const books = useSelector(genreSelectorMap[selectedGenre]);

  return (
    <div>
      <h1>Book Inventory</h1>

      {/* Genre Buttons */}
      <div>
        {Object.keys(genreSelectorMap).map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{ fontWeight: selectedGenre === genre ? 'bold' : 'normal' }}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Book List */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;