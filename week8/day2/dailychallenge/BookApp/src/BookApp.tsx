import React, { useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
}

interface ListProps <T> {
  items: T[];
  renderItem:(item: T) => React.JSX.Element;
}

function List <T> ({items, renderItem}: ListProps<T>) {
  return(
    <ul>
      {items.map((item, index) => (
        <li key= {index} >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}

function BookApp() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
  ])

  function addBook() {
    const newBook: Book = {
      id: books.length + 1,
      title: `Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
    };
    setBooks([...books, newBook]);
  }

  return (
    <div>
      <h2>Book List</h2>
      <button onClick={addBook}>Add Book</button>
      <List
        items={books}
        renderItem={(book) => (
          <span>
            <strong>{book.title}</strong> — {book.author}
          </span>
        )}
      />
    </div>
  );
}

export default BookApp;