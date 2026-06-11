import { IMG_URL } from '../../utils/constants';
import { NETFLIX_LOGO } from '../../utils/constants';
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-[140px] md:w-[165px] relative shrink-0 aspect-2/3 rounded-md overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg shadow-black/40">
      {/* Poster Image */}
      <img 
        src={posterPath.startsWith("http") ? posterPath : IMG_URL + posterPath} 
        alt="Movie Poster" 
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Netflix 'N' Logo Overlay */}
      <div className="absolute top-2 left-2 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        <img src={NETFLIX_LOGO} alt="Netflix_logo" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default MovieCard;