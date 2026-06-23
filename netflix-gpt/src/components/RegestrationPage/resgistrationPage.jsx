import { Link } from "react-router-dom";
import bgImage from "../../assets/reg-bg.png";
import { NETFLIX_LOGO } from "../../utils/constants";
import useRegistration from "./useRegistration";

const RegistrationPage = () => {
  const {
    isSignInMode,
    errorMessage,
    email,
    password,
    name,
    toggleSignInMode,
    handleButtonClick,
  } = useRegistration();

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-black px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay to make text readable over the background image */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/60 z-0"></div>

      <div className="absolute top-0 left-20 p-4 sm:p-6 md:p-8 z-20">
        <Link to="/">
          <img 
            src={NETFLIX_LOGO}
            alt="Netflix" 
            className="w-[120px] md:w-[160px] drop-shadow-md" 
          />
        </Link>
      </div>

      <div className="bg-black/70 p-10 sm:p-16 rounded-md w-full max-w-[450px] mt-24 mb-24 sm:bg-black/80 border border-gray-800 sm:border-none z-10">
        <h1 className="text-white text-3xl font-bold mb-7">{isSignInMode === false ? 'Sign Up' : 'Sign In'}</h1>
        {errorMessage && (<div className="text-red-500 mb-1 ">{errorMessage}</div>)}

        <form 
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4">
          {!isSignInMode && 
            <input 
            ref={name}
            type="text" 
            placeholder="Name" 
            className="p-4 rounded bg-[#333] text-white focus:outline-none focus:bg-[#454545] transition-colors"
          />}

          <input 
            ref={email}
            type="email" 
            placeholder="Email" 
            className="p-4 rounded bg-[#333] text-white focus:outline-none focus:bg-[#454545] transition-colors"
          />
          <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className="p-4 rounded bg-[#333] text-white focus:outline-none focus:bg-[#454545] transition-colors"
          />
          
          <button 
            onClick={handleButtonClick}
            className="mt-6 p-4 rounded bg-[#e50914] text-white font-bold text-lg hover:bg-[#c11119] active:bg-black transition duration-200"
          >
      
            {isSignInMode ? 'Sign In' : 'Register'}
          </button>
          
          <p className="text-[#737373] mt-4 text-base">
            {isSignInMode ? 'Not a member?' : 'Already a member?'}{' '}
            <span onClick={toggleSignInMode} className="text-white hover:underline cursor-pointer">
              {isSignInMode ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;