'use client'
import { books } from "../../data/books";
import StaticBookDisplay from "../../components/StaticBookDisplay";
import { useParams } from 'next/navigation';

export default function BookPage() {
  const params = useParams();
  const book = books.find(b => b.id === params.id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-8">
      <StaticBookDisplay book={book} />
    </div>
  );
}
