'use client'
import { Book } from "../types";
import BookCard from "./BookCard";

export default function BookCardWrapper({ book }: { book: Book }) {
  const handleClick = (book: Book) => {
    console.log('Clicked book:', book.title);
    // Handle click event
  };

  return (
    <BookCard 
      book={book}
    />
  );
} 