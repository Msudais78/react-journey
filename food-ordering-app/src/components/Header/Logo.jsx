import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center cursor-pointer select-none">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 tracking-tight">
                NamasteEats
            </h1>
        </Link>
    );
};

export default Logo;
