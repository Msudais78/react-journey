import React, { useState, useEffect } from 'react';

const FoodCarousel = () => {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // 1 row of 6 items

  useEffect(() => {
    // 1. Best Practice: Define the fetch function safely INSIDE the useEffect
    const fetchFoodData = async () => {
      try {
        // 2. The Fix: Using a public proxy to bypass browser CORS restrictions
        const proxyUrl = "https://corsproxy.io/?";
        const targetUrl = encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6302261&lng=77.2083665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const response = await fetch(proxyUrl + targetUrl);
        const json = await response.json();

        // Navigate through the deeply nested Swiggy API response safely
        const cards = json?.data?.cards || [];
        const foodCategoryCard = cards.find(c => c?.card?.card?.id === "whats_on_your_mind");
        const categories = foodCategoryCard?.card?.card?.gridElements?.infoWithStyle?.info || [];

        setFoodData(categories);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // 3. Call the function
    fetchFoodData();
  }, []); // Empty array ensures it only runs once on component mount

  const totalPages = Math.ceil(foodData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = foodData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">What's on your mind?</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0 || isLoading}
            className={`p-2 rounded-full flex items-center justify-center transition-colors shadow-sm
              ${currentPage === 0 || isLoading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1 || isLoading}
            className={`p-2 rounded-full flex items-center justify-center transition-colors shadow-sm
              ${currentPage >= totalPages - 1 || isLoading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="w-1/3 sm:w-1/4 md:w-1/6 shrink-0 flex flex-col items-center p-2 animate-pulse">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-100"></div>
                <div className="h-4 bg-gray-100 rounded w-20 mt-4"></div>
              </div>
            ))
            : foodData.map((item) => (
              <div 
                key={item.id} 
                className="w-1/3 sm:w-1/4 md:w-1/6 shrink-0 flex flex-col items-center justify-start group cursor-pointer p-2"
              >
                <div className="w-full bg-transparent overflow-hidden px-1 lg:px-2">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                    alt={item.action?.text || "Food item"}
                    className="w-full h-auto object-contain transition-all duration-300 group-hover:scale-110 active:scale-95"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCarousel;