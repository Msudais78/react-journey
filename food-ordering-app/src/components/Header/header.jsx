import React from "react";
import Logo from "./Logo";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import Navbar from "./navbar";
import UserProfile from "./UserProfile";
import CartIcon from "./CartIcon";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                {/* Left Section: Logo & Location */}
                <div className="flex items-center gap-8"> 
                    <Logo />
                    <LocationSelector />
                </div>
                
                {/* Center Section: Search */}
                <div className="flex-1 max-w-2xl px-8">
                    <SearchBar />
                </div>
                
                {/* Right Section: Nav & Actions */}
                <div className="flex items-center gap-6">
                    <Navbar />
                    <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
                        <UserProfile />
                        <CartIcon />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
