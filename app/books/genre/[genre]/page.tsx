'use client'
import { books } from "@/app/data/books";
import BookCardWrapper from "@/app/components/BookCardWrapper";
import { useParams } from "next/navigation";
import { Book } from "@/app/types";

export default function GenrePage() {
    const params = useParams();
    const genre = typeof params.genre === 'string' ? params.genre.replace(/-/g, ' ') : '';

    const filteredBooks = books.filter((book: Book) => 
        book.genres.includes(genre)
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Books in {genre}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map(book => (
                    <BookCardWrapper key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
        
}