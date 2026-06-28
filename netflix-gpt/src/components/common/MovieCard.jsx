import React from "react";
import { IMG_URL, NETFLIX_LOGO } from "../../utils/constants";
import clickHandler from "./clickhandler";
import { useDispatch } from "react-redux";

const MovieCard = ({ posterPath, rank, isFirst, showLogo = false, id, mediaType }) => {
    const imageUrl = posterPath?.startsWith("http")
        ? posterPath
        : posterPath ? (IMG_URL + posterPath) : "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg";
    const dispatch = useDispatch();
    if (!posterPath) return null;
    return (
        <div
            className={`relative shrink-0 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] aspect-2/3 rounded-md cursor-pointer group transition-all duration-300 hover:scale-105 hover:z-20 ${
                rank && !isFirst ? "ml-8 sm:ml-12 md:ml-16" : ""
            }`
        }
            onClick={() => clickHandler(id, dispatch, mediaType)}
        >
            <div className="w-full h-full relative overflow-hidden rounded-md shadow-[0px_4px_15px_rgba(0,0,0,0.5)] shadow-black/40">
                <img
                    src={imageUrl}
                    alt="Movie Poster"
                    className="w-full h-full object-cover rounded-md group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                />

                {/* Subtle bottom gradient to make the white stroke pop nicely on light posters */}
                {rank && (
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/50 to-transparent"></div>
                )}
            </div>

            {/* Netflix 'N' Logo Overlay */}
            {showLogo && (
                <div className="absolute top-2 left-2 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10">
                    <img src={NETFLIX_LOGO} alt="Netflix_logo" className='w-full h-full object-cover' />
                </div>
            )}

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
