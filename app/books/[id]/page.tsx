import { Book } from "../../types";
import { books } from "../../data/books";
import StaticBookDisplay from "../../components/StaticBookDisplay";
import { Metadata } from "next";

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const book = books.find(b => b.id === params.id);
  return {
    title: book?.title || 'Book Not Found',
  };
}

const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export default async function BookPage({ 
  params,
  searchParams 
}: PageProps) {
  const book = getBookById(params.id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-8">
      <StaticBookDisplay book={book} />
    </div>
  );
}
