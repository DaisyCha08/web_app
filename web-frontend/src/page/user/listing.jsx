import React from "react";

// ✅ Import images from src/assets
import img750S from "../../assets/2024-Mclaren-750S.jpg";
import img750SSpider from "../../assets/2024-Mclaren-750S-Spider.jpg";
import imgGTS from "../../assets/2024-Mclaren-GTS.jpg";
import imgJC96 from "../../assets/2025-Mclaren-750S-JC96-Edition.jpg";
import imgJC96Spider from "../../assets/2025-Mclaren-750S-Spider-JC96-Edition.jpg";
import imgArtura from "../../assets/2025-Mclaren-Artura-Spider.jpg";
import imgEndurance from "../../assets/2025-Mclaren-Project-Endurance-Le-Mans-Hypercar.jpg";
import imgW1 from "../../assets/2025-McLaren-W1.jpg";

const Listing = () => {
  const cars = [
    { name: "2024 MCLAREN 750S", price: "$299,000", image: img750S },
    { name: "2024 MCLAREN 750S SPIDER", price: "$315,000", image: img750SSpider },
    { name: "2024 MCLAREN GTS", price: "$350,000", image: imgGTS },
    { name: "2025 MCLAREN 750S JC96 EDITION", price: "$325,000", image: imgJC96 },
    { name: "2025 MCLAREN 750S SPIDER JC96 EDITION", price: "$340,000", image: imgJC96Spider },
    { name: "2025 MCLAREN ARTURA SPIDER", price: "$275,000", image: imgArtura },
    { name: "2025 MCLAREN PROJECT ENDURANCE LE MANS HYPERCAR", price: "$2,500,000", image: imgEndurance },
    { name: "2025 MCLAREN W1", price: "$1,950,000", image: imgW1 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Elegant Header */}
      <div className="pt-24 px-8 py-16">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gray-300 mr-4"></div>
            <span className="text-gray-500 text-sm tracking-widest uppercase font-light">The Collection</span>
            <div className="w-16 h-px bg-gray-300 ml-4"></div>
          </div>
          <h1 className="text-5xl font-light mb-6 tracking-tight">McLaren Automotive</h1>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Where engineering excellence meets timeless design
          </p>
        </div>

        {/* Refined Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-500 overflow-hidden"
              >
                {/* Image with Elegant Container */}
                <div className="relative h-60 bg-gray-50 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Badge */}
                  {(car.price === "$2,500,000" || car.price === "$1,950,000") && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded">
                        Exclusive
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-normal mb-3 text-gray-900 leading-tight tracking-wide">
                    {car.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-light text-gray-900">
                      {car.price}
                    </span>
                    <span className="text-gray-500 text-sm font-light">USD</span>
                  </div>

                  {/* Elegant Button */}
                  <button
                    onClick={() => (window.location.href = "/order")}
                    className="w-full bg-gray-900 text-white py-3 px-6 font-normal hover:bg-gray-800 transition-all duration-300 rounded-md border border-gray-900"
                  >
                    Discover More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;