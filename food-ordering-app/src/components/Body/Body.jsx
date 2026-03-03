
import React, { useState } from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import FoodCarousel from '../FoodCarousel/FoodCarousel';

import { restaurantList } from '../../utils/mockData';
import { getTopRestaurants } from '../../utils/restaurantHelper';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [visibleCount, setVisibleCount] = useState(7); // Display 7 items initially
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const displayedRestaurants = listOfRestaurants.slice(0, visibleCount);

  return (
    <>
      <FoodCarousel />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Top Restaurants Near You</h2>
        <div className="flex gap-2 relative">
            <button 
              className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50 bg-white shadow-xs flex items-center gap-1"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              Filter
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            {isFilterOpen && (
              <div className="absolute top-12 left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10 overflow-hidden">
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                      const filteredList = restaurantList.filter(res => res.info.avgRating >= 4.0);
                      setListOfRestaurants(filteredList);
                      setVisibleCount(7);
                      setIsFilterOpen(false);
                  }}
                >
                  Ratings 4.0+
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    const filteredList = restaurantList.filter(res => {
                        const costMatch = res.info.costForTwo.match(/\d+/);
                        const cost = costMatch ? parseInt(costMatch[0], 10) : 0;
                        return cost < 1000;
                    });
                    setListOfRestaurants(filteredList);
                    setVisibleCount(7);
                    setIsFilterOpen(false);
                  }}
                >
                  Cost: Under ₹1000
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    const filteredList = restaurantList.filter(res => {
                        const distMatch = res.info.distance.match(/[\d.]+/);
                        const dist = distMatch ? parseFloat(distMatch[0]) : 0;
                        return dist <= 2.0;
                    });
                    setListOfRestaurants(filteredList);
                    setVisibleCount(7);
                    setIsFilterOpen(false);
                  }}
                >
                  Distance: Up to 2 km
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setListOfRestaurants(getTopRestaurants(restaurantList));
                    setVisibleCount(7);
                    setIsFilterOpen(false);
                  }}
                >
                  Top Restaurants
                </button>
              </div>
            )}

            <button 
              className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50 bg-white shadow-xs"
              onClick={() => {
                setListOfRestaurants(restaurantList);
                setVisibleCount(7);
              }}
            >
              Reset
            </button>
            <button className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50 bg-white shadow-xs">Sort By</button>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedRestaurants.map((restaurant) => {
           return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>

      {visibleCount < listOfRestaurants.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prevCount) => prevCount + 7)}
            className="px-6 py-3 border border-gray-300 rounded-full text-base font-semibold bg-white hover:bg-gray-100 transition-colors shadow-sm"
          >
            Show More
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Body;

