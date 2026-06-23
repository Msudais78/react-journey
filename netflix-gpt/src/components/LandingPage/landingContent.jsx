import { useRef, useState } from "react";
import MovieCard from "../common/MovieCard";
import posterPaths from "../../utils/posterPaths";
import FeatureCard from "./featureCard";
import featuresData  from "../../utils/featuresData";

const LandingContent = () => {
   

    const sliderRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { clientWidth, scrollLeft } = sliderRef.current;
            // Scroll by roughly one container width for paginated feel
            const scrollTo = direction === "left" 
                ? scrollLeft - clientWidth + 50 
                : scrollLeft + clientWidth - 50;
            
            sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            setIsScrolled(sliderRef.current.scrollLeft > 0);
        }
    };

    return (
        <div className="relative bg-black py-4 z-20 pb-20 flex justify-center w-full">
            <div className="w-[80%] relative block">
                {/* Header */}
                <div className="mb-2 md:mb-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide">
                        Trending Now
                    </h2>
                </div>

                {/* Slider Area */}
                <div className="relative group w-full">
                    
                    {/* Left Arrow */}
                    {isScrolled && (
                        <button 
                            onClick={() => scroll("left")}
                            className="absolute left-[-15px] md:left-[-25px] lg:left-[-35px] top-1/2 -translate-y-1/2 z-30 h-[80px] md:h-[110px] w-8 md:w-10 bg-[#181818]/60 hover:bg-[#282828] rounded-md border border-white/10 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-xl"
                        >
                            <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Slider Container */}
                    <div 
                        ref={sliderRef}
                        onScroll={handleScroll}
                        // Left padding allows the overhanging "1" to slide exactly into view, aligning it with the header!
                        className="flex overflow-x-auto gap-1 md:gap-2 py-8 pl-6 sm:pl-8 md:pl-10 pr-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -ml-6 sm:-ml-8 md:-ml-10"
                    >
                        {posterPaths.map((posterPath, index) => (
                            <MovieCard key={index} rank={index + 1} posterPath={posterPath} isFirst={index === 0} />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button 
                        onClick={() => scroll("right")}
                        className="absolute right-[-15px] md:right-[-25px] lg:right-[-35px] top-1/2 -translate-y-1/2 z-30 h-[80px] md:h-[110px] w-8 md:w-10 bg-[#181818]/60 hover:bg-[#282828] rounded-md border border-white/10 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-xl"
                    >
                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Features Section */}
                <div className="mt-20">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide mb-8">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuresData.map((feature) => (
                            <FeatureCard key={feature.id} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingContent;