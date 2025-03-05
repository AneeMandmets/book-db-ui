'use client'
import { useRouter } from "next/navigation";

const genres = ["Action", "Adventure", "Biography", "Comedy", "Classic", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller"];

export default function SideMenu() {
    const router = useRouter();

    return (
        <div className="w-1/10">
            <div className="pt-4 flex flex-col ml-8 h-full">
                <p className="text-2xl font-bold mb-4">Genres</p>
                {genres.map((genre) => ( 
                    <div key={genre}>
                        <p 
                            className="leading-10 cursor-pointer hover:text-blue-500" 
                            onClick={() => router.push(`/genre/${genre}`)}
                        >
                            {genre}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
