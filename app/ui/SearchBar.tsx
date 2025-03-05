'use client'
import "./globals.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/books/search?q=${encodeURIComponent(searchTerm.trim())}`);
        } else {
            router.push('/books/search');
        }
    }

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <input 
                type="text" 
                placeholder="Search..." 
                className="rounded-full dark:text-white p-2 w-96 bg-gray-200 dark:bg-gray-800 text-gray-900 border-gray-400 dark:border-gray-700 border-solid border-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />      
            <button 
                type="submit" 
                className="dark:bg-blue-700 text-white p-2 rounded-full cursor-pointer dark:hover:bg-blue-800 bg-blue-600 hover:bg-blue-500"
            >
                Search
            </button>
        </form>
    );
}
