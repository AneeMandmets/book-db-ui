import { books } from "@/app/data/books";
import StaticBookDisplay from "@/app/components/StaticBookDisplay";
import { Metadata } from "next";

type PageProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const book = books.find(b => b.id === params.id);
  return {
    title: book?.title || 'Book Not Found',
  };
}

export default async function BookPage({ params }: PageProps) {
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
