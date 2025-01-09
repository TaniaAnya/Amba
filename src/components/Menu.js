import React from 'react';
import menu from '../asset/menu.jpg';
import gallery from '../asset/galerry.png';
import promo from '../asset/promo.jpg'

const Menu = () => {
  return (
    <div className="bg-[#74512D] min-h-screen flex flex-col items-center pt-20 relative">
      <div className="bg-gray-300 rounded-2xl py-3 px-6 mb-8 w-[70%] relative z-10">
        <h1 className="text-3xl font-semibold text-[#0B5B12]">Your Second Home</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl relative z-10">
    
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={menu} 
            alt="Menu Icon"
            className="image-cover"
          />
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={promo} 
            alt="Promo Icon"
            className="image-cover w-full h-full"
          />
          <h2 className="text-xl font-semibold text-gray-800">Promo</h2>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={gallery}
            alt="Gallery Icon"
            className="image-cover w-full h-full"
          />
          <h2 className="text-xl font-semibold text-gray-800">Gallery</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
