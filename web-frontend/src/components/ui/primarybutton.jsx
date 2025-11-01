import React from "react";

const PrimaryButton = ({ label, onClick, type = "solid" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-bold text-sm uppercase border-2 transition-all
        ${
          type === "outline"
            ? "border-white text-white bg-transparent hover:bg-white hover:text-black"
            : "bg-white text-black border-white"
        }`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;