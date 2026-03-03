import React from "react";

const foodImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
];

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif">
          Delicious Food, <span className="text-orange-600">Delivered To You</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Order your favorite meals from the best restaurants in town.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
          {/* First set of images */}
          {foodImages.map((src, index) => (
            <div
              key={`slide-1-${index}`}
              className="mx-4 relative aspect-4/3 h-64 w-80 shrink-0 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt={`Food slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {foodImages.map((src, index) => (
            <div
              key={`slide-2-${index}`}
              className="mx-4 relative aspect-4/3 h-64 w-80 shrink-0 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt={`Food slide duplicate ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Hero;
