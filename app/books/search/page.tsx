'use client'
import { useSearchParams } from 'next/navigation';
import { books } from "@/app/data/books";
import BookCardWrapper from "@/app/components/BookCardWrapper";
import { Book } from "@/app/types";
import { Suspense } from 'react';

function SearchResultsContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    
    const filteredBooks = query.trim() === '' ? books : books.filter((book: Book) => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
                {query.trim() ? `Search Results for "${query}"` : 'All Books'}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map(book => (
                    <BookCardWrapper key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default function SearchResults() {
    return (
        <Suspense fallback={<div className="p-8">Loading...</div>}>
            <SearchResultsContent />
        </Suspense>
    );
} 