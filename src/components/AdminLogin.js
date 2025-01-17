import React from "react";
import lgAdmin from './asset/lgAdmin.png'

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-sm">

        {/* Form */}
        <div className="bg-neutral-100 shadow-md rounded-lg px-8 py-6 items-center justify-center flex flex-col ">
        <div className="flex justify-center mb-6 items-center">
          <img
            src={lgAdmin}
            alt="Kopi Amba Logo"
            className="h-[150px]"
          />
        </div>
        <div className="bg-[#4a4949] py-3 px-5 rounded-full items-center justify-center w-44  shadow-lg mb-4">
        <a href="#about" className=" text-white font-medium transition duration-100 text-center">
                           Only Admin
                        </a>
        </div>
          <form className="w-full">
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-700"
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;