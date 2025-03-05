'use client'
import { Alumni_Sans } from "next/font/google";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeProvider";

const alumniSans = Alumni_Sans({
    variable: "--font-alumni-sans",
    subsets: ["latin"],
});

export default function Header() {
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`flex h-16 w-full flex-row items-center justify-between ${alumniSans.variable} bg-white dark:bg-gray-900`}>
            <div className="flex flex-row items-center cursor-pointer text-3xl" onClick={() => router.push('/')}>
                <p className="font-bold ml-4 text-gray-900 dark:text-white">Book</p>
                <p className="text-blue-500">Database</p>
            </div>
            
            <SearchBar />
            
            <div className="flex items-center gap-4 mr-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                    {theme === 'dark' ? '🌙' : '☀️'}
                </button>
                <p className="text-xl text-gray-900 dark:text-white">Hello, Guest!</p>
            </div>
        </div>
    );
}