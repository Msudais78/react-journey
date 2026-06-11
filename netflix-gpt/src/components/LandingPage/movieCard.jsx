import React from "react";

const MovieCard = ({ posterPath, rank, isFirst }) => {
    // Provide a fallback poster if none is supplied
    const imageUrl = posterPath?.startsWith("http")
        ? posterPath
        : `https://image.tmdb.org/t/p/w500${posterPath || "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"}`;

    return (
        <div
            className={`relative shrink-0 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] aspect-2/3 rounded-md cursor-pointer group transition-all duration-300 hover:scale-105 hover:z-20 ${
                rank && !isFirst ? "ml-8 sm:ml-12 md:ml-16" : ""
            }`}
        >
            {/* Poster Layout */}
            <div className="w-full h-full relative overflow-hidden rounded-md shadow-[0px_4px_15px_rgba(0,0,0,0.5)]">
                <img
                    src={imageUrl}
                    alt="Movie Poster"
                    className="w-full h-full object-cover rounded-md group-hover:brightness-110 transition-all duration-300"
                />

                {/* Subtle bottom gradient to make the white stroke pop nicely on light posters */}
                {rank && (
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/50 to-transparent"></div>
                )}
            </div>

            {/* Huge Floating Ranked Number */}
            {rank && (
                <span
                    className="absolute text-black font-black select-none pointer-events-none drop-shadow-[5px_5px_8px_rgba(0,0,0,0.9)] z-10"
                    style={{
                        bottom: "15%",
                        left: "-20%",
                        fontSize: "clamp(2px, 18vw, 100px)",
                        lineHeight: "0.8",
                        WebkitTextStroke: "clamp(2px, 0.4vw, 3px) white",
                        fontFamily: '"Arial Black", "Impact", "Arial", sans-serif',
                        letterSpacing: "-0.05em",
                    }}
                >
                    {rank}
                </span>
            )}
        </div>
    );
};

export default MovieCard;
