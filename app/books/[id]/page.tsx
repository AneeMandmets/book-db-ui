import { books } from "@/app/data/books";
import StaticBookDisplay from "@/app/components/StaticBookDisplay";

interface PageProps {
  params: {
    id: string;
  };
}

export default function BookPage({ params }: PageProps) {
  const book = books.find(b => b.id === params.id);
  
  if (!book) {
    return <div>Book not found</div>;
  }

  return <StaticBookDisplay book={book} />;
}
