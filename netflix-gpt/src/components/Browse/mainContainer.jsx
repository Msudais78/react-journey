import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

const VideoTitle = ({original_title, overview})=>{
    return (
        <div className="w-screen h-screen pb-24 md:pb-36 lg:pb-40 px-6 md:px-24 absolute text-white bg-linear-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-end z-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold w-full md:w-2/3 lg:w-1/2 tracking-tight drop-shadow-md line-clamp-2">{original_title}</h1>
            <p className="hidden md:line-clamp-3 py-6 text-sm md:text-base lg:text-lg w-full md:w-2/3 lg:w-1/2 text-gray-300 drop-shadow-sm leading-relaxed">{overview}</p>
            <div className="my-2 md:my-4 flex items-center gap-3">
                <button className="bg-white text-black py-2 md:py-3 px-6 md:px-10 text-base md:text-lg font-bold rounded-md hover:bg-opacity-80 transition-all cursor-pointer flex items-center gap-2">
                    ▶ Play
                </button>
                <button className="hidden md:flex bg-gray-500/50 text-white py-2 md:py-3 px-6 md:px-10 text-base md:text-lg font-bold rounded-md hover:bg-opacity-80 transition-all cursor-pointer items-center gap-2">
                    ⓘ More Info
                </button>
            </div>
        </div>
    );
};


const VideoBackground = ({id})=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchMoviesVideo = async()=>{
            try{
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
                const json = await data.json();
                const result = json.results.filter((video)=>video.type === "Trailer");
                const trailer = result.length ? result[0] : json.results[0];
                dispatch(addTrailerVideo(trailer));
            } catch (error){
                console.log(error);
            }
        };
        fetchMoviesVideo();
    }, [id, dispatch]);
    
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    
    if (!trailerVideo) return <h1>Loading</h1>;
    
    const {key} = trailerVideo;

    return (
        <div className="w-screen h-screen overflow-hidden absolute inset-0  bg-black">
            <iframe 
            className="w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&playlist=${key}&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1`}
            title="YouTube video player" 
            frameBorder="0"     
            allowFullScreen
            allow="autoplay"
            ></iframe>
        </div>
    );
}


const MainContainer = ({ original_title, id, overview }) => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <VideoTitle original_title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    );
};




export default MainContainer;