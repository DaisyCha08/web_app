import React from "react";

const Order = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-28 px-6 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">PRE-ORDER YOUR MCLAREN</h1>
          
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-gray-700 p-3 text-white placeholder-gray-500"
            />
            
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-gray-700 p-3 text-white placeholder-gray-500"
            />
            
            <select className="w-full bg-black border border-gray-700 p-3 text-white">
              <option>Select Car Model</option>
              <option>MCLAREN 720S</option>
              <option>MCLAREN GT-X</option>
              <option>MCLAREN ARTURA</option>
            </select>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 font-bold hover:bg-gray-200 transition-all"
            >
              CONFIRM ORDER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;