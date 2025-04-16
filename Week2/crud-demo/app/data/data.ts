import { Book, BookCondition } from "../types/book";

// In-memory storage of books
// This array will reset to these initial values when the server restarts
// In a real application, this would typically be stored in a database
const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    publishedYear: 1925,
    genre: "Fiction",
    description: "A story of decadence and excess.",
    condition: BookCondition.GOOD,
    isCheckedOut: false,
    isActive: true,
    addedDate: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0446310789",
    publishedYear: 1960,
    genre: "Fiction",
    description: "A story of racial injustice and loss of innocence.",
    condition: BookCondition.EXCELLENT,
    isCheckedOut: false,
    isActive: true,
    addedDate: new Date("2024-01-01"),
  },
  {
    id: "3",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "978-0316769488",
    publishedYear: 1951,
    genre: "Fiction",
    description: "A story of a young man's struggle with identity.",
    condition: BookCondition.GOOD,
    isCheckedOut: false,
    isActive: true,
    addedDate: new Date("2024-01-01"),
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    publishedYear: 1949,
    genre: "Fiction",
    description: "A story of a totalitarian society.",
    condition: BookCondition.GOOD,
    isCheckedOut: true,
    isActive: true,
    addedDate: new Date("2024-01-01"),
  },
];

// Function to get all books
// Returns a Promise to simulate async database operation
export async function getBooks(): Promise<Book[]> {
  return books;
}

// Function to get a single book by its ID
// Returns undefined if the book is not found
export async function getBook(id: string): Promise<Book | undefined> {
  return books.find((b) => b.id === id);
}

// Function to get only active books (not marked as deleted)
// This filters out any inactive (deleted) books from the list
export async function getActiveBooks(): Promise<Book[]> {
  return books.filter((b) => b.isActive);
}

// Function to add a new book
export async function addBook(book: Book): Promise<Book> {
  books.push(book);
  console.log("Book added:", book);
  console.log("Books:", books);
  return book;
}

//function to checkout a book
export async function checkoutBook(id: string): Promise<Book | undefined> {
  const book = books.find((b) => b.id === id);
  if (book) {
    book.isCheckedOut = true;
  }
  return book;
}

//function to return a book
export async function returnBook(id: string): Promise<Book | undefined> {
  const book = books.find((b) => b.id === id);
  if (book) {
    book.isCheckedOut = false;
  }
  return book;
}

// Function to update a book
export async function updateBook(updatedBook: Book): Promise<Book | undefined> {
  const index = books.findIndex((b) => b.id === updatedBook.id);
  if (index !== -1) {
    books[index] = updatedBook;
    return updatedBook;
  }
  return undefined;
}
