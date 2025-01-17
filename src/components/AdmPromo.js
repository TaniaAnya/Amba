import React from "react";

const AdmPromo = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-teal-300 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">KOPI AMBA</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 font-medium hover:text-black">
            Menu
          </a>
          <a href="#" className="block text-gray-700 font-bold hover:text-black">
            Promotion
          </a>
          <a href="#" className="block text-gray-700 font-medium hover:text-black">
            Gallery
          </a>
          <a href="#" className="block text-gray-700 font-medium hover:text-black">
            Information
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6 bg-beige">
        <header className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search jobs or projects"
            className="border px-4 py-2 rounded-lg w-1/2"
          />
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">AMBA</span>
          </div>
        </header>

        {/* Gallery */}
        <div>
          <button className="mb-4 text-gray-600 hover:text-black flex items-center">
            <span>&larr;</span>
            <span className="ml-2">Back</span>
          </button>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 flex justify-center items-center border border-gray-300 rounded-lg">
              <button className="text-2xl font-bold">+</button>
            </div>
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery item"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery item"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery item"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery item"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery item"
              className="w-full h-[200px] object-cover rounded-lg"
            />
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmPromo;