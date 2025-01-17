import React from 'react';
import menu from '../asset/menu.jpg';
import gallery from '../asset/galerry.png';
import promo from '../asset/promo.jpg';
import backgroundImage from '../asset/bgcoklat.png';
import { Link } from 'react-router-dom'; // Path to your background image

const Menu = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center pt-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute w-full lg:-m-80 z-10 md:-m-44">
      </div>
      <div className="bg-gray-300 rounded-2xl py-3 px-6 mb-8 w-[80%] sm:w-[70%] relative z-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B5B12] text-center">Your Second Home</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl relative z-10">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <Link to={'/menu-category'}>
            <img
              src={menu}
              alt="Menu Icon"
              className="image-cover w-40 h-40 sm:w-48 sm:h-48"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Menu</h2>
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <Link to={'/promo'}>
            <img
              src={promo}
              alt="Promo Icon"
              className="image-cover w-full h-[200px] rounded-lg"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Promo</h2>
            </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
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
  );
};

export default Menu;
