import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const ProtectedRoute = (props) => {
    const user = useSelector((state) => state.user);
    if (!user){
        return <Navigate to="/" />
    }
    return props.children;
}


export default ProtectedRoute;