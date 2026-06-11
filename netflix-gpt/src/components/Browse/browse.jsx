import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { NETFLIX_LOGO } from "../../utils/constants";
import { useSelector } from "react-redux";
import MainContainer  from "./mainContainer";
import SecondryContainer from "./secondryContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const Browse = () => {
    const navigate = useNavigate();
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            navigate('/browse');
            console.log(error)
        });
    };

   

    const movies = useSelector(state => state.movies.nowPlayingMovies);
    if (!movies || movies.length === 0) return <h1>Loading</h1>;

    const mainMovie = movies[7];
    const {original_title, overview, id} = mainMovie;

    return (
        <div className="min-h-screen bg-black">
            <header className="fixed top-0 w-full px-4 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between z-50 bg-linear-to-b from-black/90 via-black/50 to-transparent transition-all duration-300">
                <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-start">
                    <Link to='/'>
                    <div>
                        <img 
                            src={NETFLIX_LOGO} 
                            alt="Netflix" 
                            className="w-[90px] md:w-[120px] drop-shadow-md cursor-pointer" 
                        />
                    </div>
                    </Link>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-5 text-sm font-medium text-gray-200">
                            <li className="text-white font-semibold cursor-pointer">Home</li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors">TV Shows</li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors">Movies</li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors">New & Popular</li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors">My List</li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors">Browse by Languages</li>
                        </ul>
                    </div>
                </div>
                
                <div className="hidden md:flex items-center gap-6 text-white text-sm">
                    {/* Search Icon */}
                    <svg className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    
                    <span className="hidden md:block cursor-pointer hover:text-gray-300 transition-colors">Children</span>
                    
                    {/* Bell Icon */}
                    <svg className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>

                    <div className="flex items-center gap-2 cursor-pointer group" onClick={handleSignOut}>
                        <img 
                            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" 
                            alt="User Avatar" 
                            className="w-8 h-8 rounded"
                        />
                        {/* Caret Down Icon */}
                        <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </header>
            <MainContainer 
                original_title={original_title}
                id={id}
                overview={overview}
            />
            <SecondryContainer />
        </div>
    );
};

export default Browse;