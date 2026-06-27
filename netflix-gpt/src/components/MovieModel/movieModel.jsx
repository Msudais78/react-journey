import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/gptSlice";
import { formatRuntime, formatCurrency, fetchTrailer } from "../../utils/constants";

const MovieModel = () => {
    const isModalOpen = useSelector(state => state.gptSearch.isModalOpen);
    const trailerVideoDetails = useSelector(state => state.gptSearch.trailerVideoDetails);
    const dispatch = useDispatch();

    if (!isModalOpen) return null;
    if (!trailerVideoDetails) return null;


    const trailerKey = fetchTrailer(trailerVideoDetails);
    const { 
        title, 
        overview, 
        release_date, 
        runtime, 
        vote_average, 
        genres,
        production_companies,
        production_countries,
        revenue,
        budget,
    } = trailerVideoDetails;
    

    return (
        <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => dispatch(closeModal())}
        >
            <div 
                className="relative bg-[#181818] rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl border border-zinc-800 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={() => dispatch(closeModal())}
                    className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/95 p-2 rounded-full transition-all border border-zinc-800 hover:border-zinc-500 cursor-pointer z-50"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video / Trailer Section */}
                {/* 1. The Parent Container (Holds the crop) */}
<div className="relative w-full aspect-video overflow-hidden rounded-t-lg bg-black">
    
    {/* 2. The Scaled iFrame (Pushed out of bounds to hide UI) */}
    <iframe
        className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>

    {/* 3. The Invisible Glass Shield (Blocks all clicks) */}
    <div className="absolute inset-0 z-10 w-full h-full bg-transparent"></div>
</div>

                {/* Movie Details Info Section */}
                <div className="p-6 md:p-8 text-white space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Title & Overview (Left Column) */}
                        <div className="md:col-span-2 space-y-4">
                            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
                            
                            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-zinc-400">
                                {release_date && (
                                    <span className="text-white bg-zinc-800 px-2 py-0.5 rounded">{new Date(release_date).getFullYear()}</span>
                                )}
                                {runtime ? (
                                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded">{formatRuntime(runtime)}</span>
                                ) : null}
                                {vote_average ? (
                                    <span className="flex items-center gap-1 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        {vote_average.toFixed(1)} Rating
                                    </span>
                                ) : null}
                            </div>

                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">{overview}</p>
                        </div>

                        {/* Production details, genres, financials (Right Column) */}
                        <div className="space-y-4 text-xs md:text-sm border-t border-zinc-800 md:border-t-0 pt-4 md:pt-0">
                            {genres && genres.length > 0 && (
                                <div>
                                    <span className="text-zinc-500 font-semibold block mb-1">Genres</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {genres?.map((genre) => (
                                            <span key={genre.id} className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800/80 hover:bg-zinc-800 transition text-xs">
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {production_companies && production_companies.length > 0 && (
                                <div>
                                    <span className="text-zinc-500 font-semibold block mb-0.5">Production</span>
                                    <span className="text-zinc-300 leading-normal">
                                        {production_companies?.map((comp) => comp.name).join(", ")}
                                    </span>
                                </div>
                            )}

                            {production_countries && production_countries.length > 0 && (
                                <div>
                                    <span className="text-zinc-500 font-semibold block mb-0.5">Country</span>
                                    <span className="text-zinc-300">
                                        {production_countries?.map((obj) => obj.name).join(", ")}
                                    </span>
                                </div>
                            )}

                            {(budget > 0 || revenue > 0) && (
                                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-zinc-800/50">
                                    {budget > 0 && (
                                        <div>
                                            <span className="text-zinc-500 font-semibold block mb-0.5">Budget</span>
                                            <span className="text-zinc-300 font-mono text-xs md:text-sm">{formatCurrency(budget)}</span>
                                        </div>
                                    )}
                                    {revenue > 0 && (
                                        <div>
                                            <span className="text-zinc-500 font-semibold block mb-0.5">Revenue</span>
                                            <span className="text-zinc-300 font-mono text-xs md:text-sm">{formatCurrency(revenue)}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModel;