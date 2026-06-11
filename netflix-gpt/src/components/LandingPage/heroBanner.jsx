import { Link } from "react-router-dom";
import bgImage from "../../assets/netflix-poster.jpg";
import { NETFLIX_LOGO } from "../../utils/constants";

const HeroBanner = () => {
    return (
        <div className="relative min-h-dvh font-sans text-white bg-black flex flex-col">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden ">
                <img 
                    src={bgImage}
                    alt="Background" 
                    className="w-full h-full object-cover bg-cover"
                />
                <div className="absolute inset-0 bg-black/40 bg-linear-to-t from-black/90 via-black/20 to-black/80"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-44 py-6 w-full max-w-[1920px] mx-auto animate-fade-in-down">
                <div>
                    <img 
                        src={NETFLIX_LOGO} 
                        alt="Netflix" 
                        className="w-[100px] md:w-[148px] drop-shadow-md" 
                    />
                </div>
                <div>
                    <Link to='/registration'>
                    <button className="bg-[#7c1b1f] text-white hover:bg-[#c11119] transition-colors duration-200 px-4 py-[0.4rem] font-semibold rounded text-[0.85rem] md:text-sm drop-shadow">
                        Sign In
                    </button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-8 max-w-[950px] mx-auto pb-32">
                <h1 className="text-[2.2rem] md:text-5xl lg:text-[4rem] font-black mb-4 leading-[1.1] drop-shadow-lg text-white">
                    Unlimited movies, TV <br className="hidden lg:block"/> shows, and more
                </h1>
                <p className="text-[1.2rem] md:text-2xl font-semibold mb-6 drop-shadow-lg text-white">
                    Starts at Rs 250. Cancel anytime.
                </p>
                <p className="text-[1.1rem] md:text-[1.2rem] font-medium mb-6 drop-shadow-lg text-white leading-relaxed">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {/* Email Form */}
                <form className="flex flex-col sm:flex-row items-center justify-center w-full max-w-[620px] gap-2 mt-2" onSubmit={(e) => e.preventDefault()}>
                    <div className="w-full sm:flex-1 relative">
                        <input 
                            type="email" 
                            placeholder="Email address"
                            className="w-full px-4 py-3 md:py-[1.15rem] bg-black/60 border border-gray-400/80 rounded text-white text-base focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-300 backdrop-blur-sm transition-all duration-200 peer"
                            required
                        />
                        <label className="absolute left-4 top-4 text-gray-300 text-sm peer-focus:text-xs peer-focus:-translate-y-2.5 peer-valid:text-xs peer-valid:-translate-y-2.5 transition-all duration-200 pointer-events-none origin-left transform shadow-black drop-shadow-md hidden">
                            Email address
                        </label>
                    </div>
                    <button type="submit" className="flex items-center justify-center w-auto bg-[#e50914] hover:bg-[#c11119] text-white px-6 md:px-7 py-3 md:py-[1.1rem] rounded font-bold text-xl md:text-2xl transition-colors duration-200 gap-2 shrink-0 group">
                        Get Started
                        <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:block transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>
            </main>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none h-20 sm:h-24 md:h-32 overflow-hidden">
                 {/* Red Glow */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-red-600/30 blur-2xl rounded-[50%] pointer-events-none"></div>
                 
                 {/* Black Ellipse with Red Border */}
                 <div 
                     className="absolute w-[150%] left-1/2 -translate-x-1/2 top-0 h-[250%] bg-black rounded-[50%] border-t-4 border-red-600/50"
                 ></div>
            </div>
        </div>
    );
};

export default HeroBanner;
