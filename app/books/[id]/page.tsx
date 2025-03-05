'use client'
import { Book } from "../../types";
import { books } from "../../data/books";
import StaticBookDisplay from "../../components/StaticBookDisplay";
import { Metadata } from "next";
import { useParams } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book Details',
  };
}

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
