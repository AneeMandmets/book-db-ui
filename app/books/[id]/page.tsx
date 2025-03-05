import { books } from "@/app/data/books";
import StaticBookDisplay from "@/app/components/StaticBookDisplay";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = books.find(b => b.id === params.id);
  return {
    title: book?.title || 'Book Not Found',
  };
}

export default function BookPage({ params }: Props) {
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
