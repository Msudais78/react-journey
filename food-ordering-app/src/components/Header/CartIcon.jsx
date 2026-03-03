import React from "react";

const CartIcon = () => {
    return (
        <div className="relative group cursor-pointer p-2">
            <svg className="w-7 h-7 text-gray-600 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500 rounded-full ring-2 ring-white transform group-hover:scale-110 transition-transform duration-200">
                0
            </span>
        </div>
    );
};

export default CartIcon;
