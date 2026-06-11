import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-black py-16">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-24">
                
                {/* Finish Sign Up Button Section */}
                <div className="mb-24">
                    <button className="bg-[#e50914] hover:bg-[#c11119] text-white text-xl md:text-2xl font-semibold py-3 px-6 rounded flex items-center transition-colors">
                        Finish Sign-Up
                        <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="text-[#b3b3b3] text-[15px]">
                    <p className="mb-8">
                        <a href="#" className="underline hover:text-white transition-colors">Questions? Contact us.</a>
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <ul className="space-y-4">
                            <li><a href="#" className="underline hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Investor Relations</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Speed Test</a></li>
                        </ul>
                        <ul className="space-y-4">
                            <li><a href="#" className="underline hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Jobs</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Cookie Preferences</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Legal Notices</a></li>
                        </ul>
                        <ul className="space-y-4">
                            <li><a href="#" className="underline hover:text-white transition-colors">Account</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Ways to Watch</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Corporate Information</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Only on Netflix</a></li>
                        </ul>
                        <ul className="space-y-4">
                            <li><a href="#" className="underline hover:text-white transition-colors">Media Center</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Terms of Use</a></li>
                            <li><a href="#" className="underline hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="mb-8 relative inline-block">
                        <select className="appearance-none bg-black border border-[#737373] text-white py-1.5 pl-10 pr-10 rounded text-sm focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
                            <option value="english">English</option>
                        </select>
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
                            {/* Netflix Translation Icon */}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
                            </svg>
                        </div>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <p className="text-[13px]">Netflix Pakistan</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
