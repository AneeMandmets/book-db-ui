import { Book } from "./types";
import BookCardWrapper from "./components/BookCardWrapper";

// Temporary mock data - later you can replace this with actual API calls
const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Classic",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Science Fiction",
  },
];

export default function Home() {
  return (
    <main className="p-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockBooks.map((book) => (
          <BookCardWrapper 
            key={book.id} 
            book={book}
          />
        ))}
      </div>
    </main>
  );
}
