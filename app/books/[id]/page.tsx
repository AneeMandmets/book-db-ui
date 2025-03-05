import { books } from "@/app/data/books";
import StaticBookDisplay from "@/app/components/StaticBookDisplay";

interface Props {
  params: { id: string }
}

// Mark the component as async
export default async function BookPage({ params }: Props) {
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
