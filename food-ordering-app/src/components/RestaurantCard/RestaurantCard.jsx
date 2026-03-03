
import React, { useState, useEffect } from 'react';

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  address,
  distance,
  offer,
  images
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use generic images if specific images array is not provided, or fallback to single image
  const imageList = images && images.length > 0 ? images : [cloudinaryImageId];

  useEffect(() => {
    if (imageList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div className="group w-full rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:scale-95 cursor-pointer border border-gray-100 flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          className="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
          src={imageList[currentImageIndex]}
          alt={name}
        />
        
        {/* Carousel Dots - Only visible if more than 1 image */}
        {imageList.length > 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {imageList.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all duration-300 ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        )}

        {offer && (
             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-2 pointer-events-none">
            <p className="text-white font-bold text-sm tracking-wide">{offer}</p>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col grow">
        <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-gray-800 truncate w-4/5" title={name}>{name}</h3>
            {avgRating && (
                <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs gap-1">
                    <span>★</span>
                    <span className="font-bold">{avgRating}</span>
                </div>
            )}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
            <span className="truncate w-3/5">{cuisines.join(", ")}</span>
            <span className="shrink-0">{costForTwo}</span>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mt-3 border-t border-gray-100 pt-3">
            <div className="flex flex-col">
                <span className="font-medium text-gray-700 truncate w-32" title={address}>{address}</span>
            </div>
             <div className="flex flex-col items-end">
                <span className="font-medium text-gray-700">{distance}</span>
            </div>
        </div>

        {/* Buttons similar to screenshot */}
        <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded inline-block self-start">
            Up to 10% off with bank offers
        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;
