import { Book } from "../types";

interface StaticBookDisplayProps {
  book: Book;
}

export default function StaticBookDisplay({ book }: StaticBookDisplayProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
} 