const validateData = (email, password, name = false) => {
    const isemailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isemailValid) return "The Email you entered is not valid.";
    if(!isPasswordValid) return "The Password you entered is not valid.";
    if (name !== false){
        const isNameValid = /^[a-zA-Z ]{2,}$/.test(name);
        if(!isNameValid) return "The Name you entered is not valid.";
    }
    
    return null;
}

export default validateData;