import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMediaReducer } from "../store/slices/moviesSlice";

const useFetchCategory = (endpoint, domain, category) => {
    const dispatch = useDispatch();
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3${endpoint}`, API_OPTIONS);
                const result = await res.json();
                dispatch(addMediaReducer({
                    domain: domain,
                    category: category,
                    data: result.results
                }))
            } catch (error) {
                console.log("An Error Occured", error);
            }
        }
        fetchData();
    }, [endpoint, domain, category]);
};



export default useFetchCategory;