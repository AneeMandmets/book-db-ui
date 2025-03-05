const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller"];

export default function SideMenu() {
    return (
        <div className="w-1/10">
            <div className="flex flex-col ml-4 h-full">
                {genres.map((genre) => ( 
                    <div key={genre}>
                        <p className="leading-10">{genre}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
