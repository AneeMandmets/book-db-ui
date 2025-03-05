const genres = ["Action", "Adventure", "Biography", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller"];

export default function SideMenu() {
    return (
        <div className="w-1/10">
            <div className="pt-4 flex flex-col ml-8 h-full">
                <p className="text-2xl font-bold mb-4">Genres</p>
                {genres.map((genre) => ( 
                    <div key={genre}>
                        <p className="leading-10">{genre}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
