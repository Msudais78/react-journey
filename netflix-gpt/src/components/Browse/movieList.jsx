import MovieCard from "../common/MovieCard";
import { useRef, useState, useEffect } from "react";
import { updateButtons, scroll } from "../../utils/scrollHandler";

const MovieList = ({ title, movies, mediaType }) => {
    const sliderRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const handleScroll = () => {
        updateButtons(sliderRef, setShowLeft, setShowRight);
    };

    useEffect(() => {
        const triggerUpdate = () => updateButtons(sliderRef, setShowLeft, setShowRight);
        triggerUpdate();
        
        // A small delay ensures content has rendered and layout widths are accurate
        const timeoutId = setTimeout(triggerUpdate, 100);

        window.addEventListener("resize", triggerUpdate);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", triggerUpdate);
        };
    }, [movies]);
    
    return (
        <div className="py-4 md:py-6 relative group/row">
            <h2 className="text-lg md:text-2xl font-bold text-white mb-3 tracking-wide">{title}</h2>
            
            <div className="relative">
                {/* Left Button */}
                <button 
                    onClick={() => scroll("left", sliderRef)}
                    className={`absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer z-20 transition-all duration-300 rounded-r-md
                        ${showLeft ? 'opacity-0 group-hover/row:opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-200 hover:scale-125">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Movie Slider */}
                <div 
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar pr-4 md:pr-12 scrollbar-hide scroll-smooth"
                >
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} showLogo={true} id={movie.id} mediaType={mediaType}/>
                    ))}
                </div>

                {/* Right Button */}
                <button 
                    onClick={() => scroll("right", sliderRef)}
                    className={`absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer z-20 transition-all duration-300 rounded-l-md
                        ${showRight ? 'opacity-0 group-hover/row:opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-200 hover:scale-125">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MovieList;