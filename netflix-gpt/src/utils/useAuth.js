import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./userSlice";


const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);
}

export default useAuth;