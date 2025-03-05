import { books } from "./data/books";
import BookCardWrapper from "./components/BookCardWrapper";

export default function Home() {
  return (
    <main className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCardWrapper 
            key={book.id} 
            book={book}
          />
        ))}
      </div>
    </main>
  );
}
