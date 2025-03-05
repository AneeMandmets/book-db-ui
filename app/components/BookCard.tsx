'use client'
import { Book } from "../types";

interface BookCardProps {
  book: Book;
  onClick?: (book: Book) => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div 
      onClick={() => onClick?.(book)}
      className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="text-sm text-gray-500">
        {book.publishedYear} • {book.genre}
      </p>
    </div>
  );
} 