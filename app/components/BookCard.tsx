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
      className="p-4 border rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:shadow-gray-600"
    >
        <div className="flex flex-row justify-center">
            <Image
                src={book.coverImage || defaultCover}
                alt={book.title}
                height={234}
                width={156}
                className="object-cover rounded-md"
            />
        </div>
        
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{book.title}</h2>
      <p className="text-gray-600 dark:text-gray-400">by {book.author}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">
        {book.publishedYear} • {book.genres.join(", ")}
      </p>
    </div>
  );
} 