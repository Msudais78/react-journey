export const NETFLIX_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"; 

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};

const formatRuntime = (minutes) => {
        if (!minutes) return "";
        const hrs = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
    };

    const formatCurrency = (amount) => {
        if (!amount) return "N/A";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        }).format(amount);
    };

    
    const fetchTrailer = (trailerVideoDetails) => {
        const trailers = trailerVideoDetails?.videos?.results?.filter((obj) => obj.type === "Trailer");
        const trailer = trailers && trailers.length > 0 ? trailers[0].key : null;
        return trailer;
    };


    

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export {formatRuntime,formatCurrency, fetchTrailer};