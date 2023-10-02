import {
  borrow,
  returnBook,
  addBook,
  removeBook,
  borrowBook,
  returnBorrowedBook,
  Library,
  Book,
} from './exo3';

describe('Library Functions', () => {
  let library: Library;

  beforeEach(() => {
    // Initialize an empty library before each test
    library = {};
  });

  it('should add a book to the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    const updatedLibrary = addBook(book, library);

    expect(updatedLibrary[book.ISBN]).toEqual(book);
  });

  it('should throw an error when adding an existing book to the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    library[book.ISBN] = book;

    expect(() => addBook(book, library)).toThrowError('Book already exists in library');
  });

  it('should remove a book from the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    library[book.ISBN] = book;
    const updatedLibrary = removeBook(book, library);

    expect(updatedLibrary[book.ISBN]).toBeUndefined();
  });

  it('should throw an error when removing a non-existing book from the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    expect(() => removeBook(book, library)).toThrowError('Book does not exist in library');
  });

  it('should borrow a book from the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    library[book.ISBN] = book;
    const updatedLibrary = borrow(book, library);

    expect(updatedLibrary[book.ISBN]?.isBorrowed).toBe(true);
  });

  it('should throw an error when borrowing an already borrowed book', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: true,
    };

    library[book.ISBN] = book;

    expect(() => borrow(book, library)).toThrowError('Book is already borrowed');
  });

  it('should return a borrowed book to the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: true,
    };

    library[book.ISBN] = book;
    const updatedLibrary = returnBook(book, library);

    expect(updatedLibrary[book.ISBN]?.isBorrowed).toBe(false);
  });

  it('should throw an error when returning a book that is not borrowed', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    library[book.ISBN] = book;

    expect(() => returnBook(book, library)).toThrowError('Book is not borrowed');
  });

  it('should borrow a book by ISBN from the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    library[book.ISBN] = book;
    const borrowedBook = borrowBook(book.ISBN, library);

    expect(borrowedBook.isBorrowed).toBe(true);
  });

  it('should throw an error when borrowing a book by ISBN that does not exist', () => {
    const nonExistentISBN = '9876543210';

    expect(() => borrowBook(nonExistentISBN, library)).toThrowError('Book does not exist in library');
  });

  it('should throw an error when borrowing a book by ISBN that is already borrowed', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: true,
    };

    library[book.ISBN] = book;

    expect(() => borrowBook(book.ISBN, library)).toThrowError('Book is already borrowed');
  });

  it('should return a borrowed book by ISBN to the library', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: true,
    };

    library[book.ISBN] = book;
    const returnedBook = returnBorrowedBook(book.ISBN, library);

    expect(returnedBook.isBorrowed).toBe(false);
  });

  it('should throw an error when returning a book by ISBN that does not exist', () => {
    const nonExistentISBN = '9876543210';

    expect(() => returnBorrowedBook(nonExistentISBN, library)).toThrowError('Book does not exist in library');
  });

  it('should throw an error when returning a book by ISBN that is not borrowed', () => {
    const book: Book = {
      title: 'Sample Book',
      author: 'Sample Author',
      ISBN: '1234567890',
      pageNumbers: 200,
      isBorrowed: false,
    };

    library[book.ISBN] = book;

    expect(() => returnBorrowedBook(book.ISBN, library)).toThrowError('Book is not borrowed');
  });
});
