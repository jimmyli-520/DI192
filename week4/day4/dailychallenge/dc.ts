interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  protected books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(b => b.isbn === isbn)
  }
}

class DigitalLibrary extends Library {
  readonly website: string;
  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.books.map(b => b.title)
  }
}

const myLibrary = new DigitalLibrary("www.mylibrary.com")
myLibrary.addBook({
  title: "...",
  author: "...",
  isbn: "...",
  publishedYear: 2026,
  genre: "..."
});

console.log(myLibrary.getBookDetails("..."));
console.log(myLibrary.listBooks());