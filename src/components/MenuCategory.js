import React from "react";
import kopsu from "./asset/kopsuu.jpg"
import Fruit from "./asset/friutt.png"
import kentang from "./asset/ktg.png"
import { Link } from 'react-router-dom';
import { CircleArrowLeft } from "lucide-react";


const MenuCategory = () => {
  return (
    <div id="menuCategory" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-950 to-yellow-950">
      <button className="self-start ml-4 mb-6 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <h1 className="text-2xl font-bold text-white mb-10">Choose Your Category</h1>
      <div className="absolute top-0 left-0 m-4">
        <Link to={'/'}>
          <button className="text-white text-sm font-semibold">
            <CircleArrowLeft />
          </button>
        </Link>
      </div>
      <div className="flex space-x-6">
        {/* Coffee Category */}
        <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-lg">
          <Link to={'/food-menu'}>
          <img
            src={kopsu}
            alt="Coffee"
            className="w-32 h-32 mb-4"
          />
          <p className="text-yellow-800 font-medium">Coffee</p>
          </Link>
        </div>

        {/* Non Coffee Category */}
        <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-lg">
         <Link to={'/non-coffe'}>
          <img
            src={Fruit}
            alt="Non Coffee"
            className="w-32 h-32 mb-4"
          />
          <p className="text-yellow-800 font-medium">Non Coffee</p>
          </Link>
        </div>

        {/* Snack Category */}
        <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-lg">
          <Link to={'/snack'}>
          <img
            src={kentang}
            alt="Snack"
            className="w-32 h-32 mb-4"
          />
          <p className="text-yellow-800 font-medium">Snack</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;