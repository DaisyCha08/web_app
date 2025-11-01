import React from "react";

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-black text-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,255,0,0.2)] relative overflow-hidden group"
    >
      {/* Icon container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <div className="text-3xl">{icon}</div>
        </div>
      </div>

      <h2 className="text-2xl font-black uppercase tracking-tight mb-4 text-yellow-400">
        {title}
      </h2>

      <p className="text-gray-300 leading-relaxed text-[14px] tracking-wide">
        {description}
      </p>

      {/* Hover underline effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
    </div>
  );
};

export default FeatureCard;
