import { Alumni_Sans } from "next/font/google";
import SearchBar from "./SearchBar";

const alumniSans = Alumni_Sans({
    variable: "--font-alumni-sans",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <div className={`flex h-16 w-full flex-row black text-white items-center text-2xl justify-between ${alumniSans.variable}`}>
            <div className="flex flex-row items-center">
                <p className="font-bold ml-4">Book</p>
                <p>Database</p>
            </div>
            
            <SearchBar />
            <p className="mr-4">Hello, Guest!</p>
        </div>
    );
}