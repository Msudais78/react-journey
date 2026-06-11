
import validateData from "./validateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const handleRegistrationSubmit = (
  isSignInMode, 
  emailValue, 
  passwordValue, 
  nameValue, 
  setErrorMessage
) => {
  let message;
  
  // 1. Validate Data
  if (isSignInMode) {
    message = validateData(emailValue, passwordValue);
  } else {
    message = validateData(emailValue, passwordValue, nameValue);
  }
  
  setErrorMessage(message);
  
  if (message) return;

  // 2. Firebase Authentication
  if (!isSignInMode) {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("New user registered:", user);
      })
      .catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });
  } else {
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });
  }
};