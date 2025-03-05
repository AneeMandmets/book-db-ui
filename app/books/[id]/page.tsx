import { books } from "@/app/data/books";
import StaticBookDisplay from "@/app/components/StaticBookDisplay";
import { Metadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  props: Props,
): Promise<Metadata> {
  const book = books.find(b => b.id === props.params.id);
  return {
    title: book?.title || 'Book Not Found',
  };
}

export default async function BookPage(props: Props) {
  const book = books.find(b => b.id === props.params.id);
  
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-8">
      <StaticBookDisplay book={book} />
    </div>
  );
}
