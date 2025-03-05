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
                className="rounded-full bg-gray-800 text-white p-2 w-96"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />      
            <button 
                type="submit" 
                className="bg-blue-500 text-white p-2 rounded-full cursor-pointer"
            >
                Search
            </button>
        </form>
    );
}
