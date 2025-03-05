'use client'
import { Alumni_Sans } from "next/font/google";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

const alumniSans = Alumni_Sans({
    variable: "--font-alumni-sans",
    subsets: ["latin"],
});

export default function Header() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <div className={`flex h-16 w-full flex-row black text-white items-center text-3xl justify-between ${alumniSans.variable}`}>
            <div className="flex flex-row items-center cursor-pointer" onClick={handleClick}>
                <p className="font-bold ml-4">Book</p>
                <p>Database</p>
            </div>
            
            <SearchBar />
            <p className="mr-4">Hello, Guest!</p>
        </div>
    );
}