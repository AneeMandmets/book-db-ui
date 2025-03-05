import { Book } from "../types";

export const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Classic",
    description: "A novel about the American Dream",
    coverImage: '/book-covers/the-great-gatsby.jpg'
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Science Fiction",
    description: "A dystopian novel about a totalitarian society",
    coverImage: '/book-covers/1984.jpg'
  },
]; 