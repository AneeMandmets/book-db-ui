import { Book } from "../../types";
import { books } from "../../data/books";
import StaticBookDisplay from "../../components/StaticBookDisplay";

const getBookById = (id: string): Book | undefined => {
    
    return books.find(book => book.id === id);
  };

export default function BookPage({ params }: { params: { id: string}}) {
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
