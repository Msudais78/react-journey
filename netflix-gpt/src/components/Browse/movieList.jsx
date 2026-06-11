import MovieCard from "./movieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="py-4 md:py-6">
            <h2 className="text-lg md:text-2xl font-bold text-white mb-3 tracking-wide">{title}</h2>
            <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar pr-4 md:pr-12">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;