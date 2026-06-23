import { useState, useRef } from "react";
import { handleRegistrationSubmit } from "../../utils/authHandler";

const useRegistration = () => {
    const [isSignInMode, setisSignInMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInMode = () => {
        setisSignInMode(!isSignInMode);
    };

    const handleButtonClick = () => {
        handleRegistrationSubmit(
            isSignInMode,
            email.current?.value,
            password.current?.value,
            name.current?.value,
            setErrorMessage
        );
    };

    return {
        isSignInMode,
        errorMessage,
        email,
        password,
        name,
        toggleSignInMode,
        handleButtonClick,
    };
};

export default useRegistration;
