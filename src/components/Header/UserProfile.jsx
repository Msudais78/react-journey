import React from "react";

const UserProfile = () => {
    return (
        <div className="flex items-center gap-2 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-200">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                <svg className="w-6 h-6 text-gray-500 hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <span className="text-base font-semibold">Login</span>
        </div>
    );
};

export default UserProfile;
