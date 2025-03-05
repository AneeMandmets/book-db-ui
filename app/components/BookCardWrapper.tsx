'use client'
import { Book } from "../types";
import BookCard from "./BookCard";

export default function BookCardWrapper({ book }: { book: Book }) {

  return (
    <BookCard 
      book={book}
    />
  );
} 