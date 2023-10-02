
export interface Book {
    title: string,
    author: string,
    ISBN: string,
    pageNumbers: number,
    isBorrowed: boolean,
}

export interface Library {
    [key: string]: Book
}

export function borrow(book: Book, library: Library): Library {
  if (book.isBorrowed) {
    throw new Error('Book is already borrowed')
  }

  return {
    ...library,
    [book.ISBN]: {
      ...book,
      isBorrowed: true
    }
  }
}

export function returnBook(book: Book, library: Library): Library {
  if (!book.isBorrowed) {
    throw new Error('Book is not borrowed')
  }

  return {
    ...library,
    [book.ISBN]: {
      ...book,
      isBorrowed: false
    }
  }
}

export function addBook(book: Book, library: Library): Library {
  if (book.ISBN in library) {
    throw new Error('Book already exists in library')
  }

  return {
    ...library,
    [book.ISBN]: book
  }
}

export function removeBook(book: Book, library: Library): Library {
  if (!(book.ISBN in library)) {
    throw new Error('Book does not exist in library')
  }

  const newLibrary = { ...library }
  delete newLibrary[book.ISBN]
  return newLibrary
}

export function borrowBook(ISBN: string, library: Library): Book {
  if (!(ISBN in library)) {
    throw new Error('Book does not exist in library')
  }

  if (library[ISBN].isBorrowed) {
    throw new Error('Book is already borrowed')
  }

  return {
    ...library[ISBN],
    isBorrowed: true
  }
}

export function returnBorrowedBook(ISBN: string, library: Library): Book {
  if (!(ISBN in library)) {
    throw new Error('Book does not exist in library')
  }

  if (!library[ISBN].isBorrowed) {
    throw new Error('Book is not borrowed')
  }

  return {
    ...library[ISBN],
    isBorrowed: false
  }
}