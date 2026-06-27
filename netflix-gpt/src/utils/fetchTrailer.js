import { useSelector } from "react-redux";

const fetchTrailer = () => {
    const trailerVideoDetails = useSelector(store => store.gptSearch.trailerVideoDetails);
    const trailers = trailerVideoDetails?.videos?.results?.filter((obj) => obj.type === "Trailer");

    const trailer = trailers[0];
    return trailer;
}

export default fetchTrailer;
