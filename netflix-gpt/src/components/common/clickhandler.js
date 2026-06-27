import { API_OPTIONS } from "../../utils/constants";
import { openModal } from "../../store/slices/gptSlice";

const clickHandler = async (id, dispatch, mediaType) => {
    const type = (mediaType === "tv") ? "tv" : "movie";
    const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?append_to_response=videos`,
        API_OPTIONS
    )
    const result = await res.json();
    dispatch(openModal(result));
}

export default clickHandler;