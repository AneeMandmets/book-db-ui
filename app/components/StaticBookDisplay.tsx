import { Book } from "../types";
import Image from "next/image"

interface StaticBookDisplayProps {
  book: Book;
}

const defaultCover = '/default-book-cover.jpg'; 

export default function StaticBookDisplay({ book }: StaticBookDisplayProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 pl-12">
        <div>
            <Image
                src={book.coverImage || defaultCover}
                alt={book.title}
                width={300}
                height={450}
                className="object-cover rounded-md"
            />
        </div>
        <div className="flex flex-col gap-2 ml-4">
            <h2 className="text-4xl font-bold">{book.title}</h2>
            <p className="text-lg font-semibold text-blue-500">by {book.author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{book.publishedYear}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{book.genre}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{book.description}</p>
        </div>
    </div>
    
  );
} 