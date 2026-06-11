import React, { useState } from "react";
import faqs from "../../utils/faqs";

const FaqsSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-black py-16">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-24">
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-8 text-left tracking-tight">
                    Frequently Asked Questions
                </h1>
                
                <div className="space-y-2">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="w-full text-white">
                            <button 
                                className="w-full flex justify-between items-center bg-[#2d2d2d] hover:bg-[#414141] transition-colors duration-200 p-6 md:p-6 text-left" 
                                onClick={() => toggleAccordion(faq.id)}
                            >
                                <h3 className="text-xl md:text-2xl font-normal">
                                    {faq.question}
                                </h3>
                                
                                <svg 
                                    className={`w-8 h-8 md:w-10 md:h-10 transform transition-transform duration-300 shrink-0 ${activeIndex === faq.id ? 'rotate-45' : 'rotate-0'}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeWidth={1} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>

                            {activeIndex === faq.id && (
                                <div className="mt-[2px] bg-[#2d2d2d] p-6 md:p-6 text-left">
                                    <p className="text-lg md:text-2xl font-normal whitespace-pre-wrap">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqsSection;