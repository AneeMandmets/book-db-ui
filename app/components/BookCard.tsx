'use client'
import { Book } from "../types";
import { useRouter } from 'next/navigation';
import Image from "next/image"; 

interface BookCardProps {
  book: Book;
  onClick?: (book: Book) => void;
}

const defaultCover = '/default-book-cover.jpg';

export default function BookCard({ book, onClick }: BookCardProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick(book);
        } else {
            router.push(`/books/${book.id}`);
        }
    };
  return (
    <div 
      onClick={handleClick}
      className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
    >
        <div className="flex flex-row justify-center">
            <Image
                src={book.coverImage || defaultCover}
                alt={book.title}
                width={156}
                height={234}
                className="object-cover rounded-md"
            />
        </div>
        
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="text-sm text-gray-500">
        {book.publishedYear} • {book.genre}
      </p>
    </div>
  );
} 