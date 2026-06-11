import React from "react";

const FeatureCard = ({ title, description }) => {
    return (
        <div className="relative w-full min-h-[250px] md:min-h-[280px] lg:min-h-[300px] rounded-[1.2rem] bg-linear-to-br from-[#1E1F3D] via-[#101020] to-[#0A0A10] p-6 md:p-8 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative z-10 flex flex-col h-full text-left">
                {/* Text Content */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug tracking-tight">
                        {title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300/90 font-medium leading-relaxed max-w-[90%]">
                        {description}
                    </p>
                </div>
            </div>

            
        </div>
    );
};

export default FeatureCard;