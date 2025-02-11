import React from 'react';
import menu from '../asset/menu.jpg';
import gallery from '../asset/galerry.png';
import promo from '../asset/promo.jpg';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="h-auto flex flex flex-col items-center pt-20 relative overflow-hidden bg-[#74512D]">
      <div className="absolute w-full lg:-m-80 z-10 md:-m-44"></div>

      {/* Judul */}
      <div className="bg-gray-300 rounded-2xl py-3 px-6 mb-8 w-[80%] sm:w-[70%] relative z-10 shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B5B12] text-center">Your Second Home</h1>
      </div>

      {/* Grid Menu */}
      <div className="w-full h-screen shadow-sm overflow-x-auto items-center justify-center">
        <div className="grid grid-cols-3 gap-8 w-max sm:w-[80%] md:max-w-4xl mx-auto relative z-10">
          
          {/* Menu */}
          <div className="bg-white shadow-lg shadow-gray-950 rounded-lg p-4 flex flex-col items-center flex-shrink-0">
            <Link to={'/menu-category'}>
              <img
                src={menu}
                alt="Menu Icon"
                className="image-cover w-40 h-40 sm:w-48 sm:h-48"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Menu</h2>
            </Link>
          </div>

          {/* Promo */}
          <div className="bg-white rounded-lg shadow-lg shadow-black p-4 flex flex-col items-center flex-shrink-0">
            <Link to={'/promo'}>
              <img
                src={promo}
                alt="Promo Icon"
                className="image-cover w-full h-[200px] rounded-lg"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Promo</h2>
            </Link>
          </div>

          {/* Gallery */}
          <div className="bg-white shadow-lg shadow-gray-950 rounded-lg p-4 flex flex-col items-center flex-shrink-0">
            <Link to={'/Gallery'}>
              <img
                src={gallery}
                alt="Gallery Icon"
                className="image-cover w-full h-[200px] rounded-lg"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Gallery</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;