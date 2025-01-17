import React, { useRef } from "react";
import customer from "./asset/customer.jpg";
import kaca from "./asset/kaca.jpg";
import couple from "./asset/couple.jpg";
import caffe from "./asset/caffe.jpg";

const Gallery = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Scroll ke kiri sebanyak 200px
        behavior: 'smooth', // Animasi smooth scroll
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Scroll ke kanan sebanyak 200px
        behavior: 'smooth', // Animasi smooth scroll
      });
    }
  };

  return (
    <div className="bg-yellow-900 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-white mb-8">Our Gallery</h1>

      {/* Gallery Container with horizontal scrolling */}
      <div className="relative">
        {/* Tombol Panah Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          &#8592;
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto py-4 snap-x snap-mandatory"
        >
          {/* Image Card 1 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={customer}
              alt="Customer enjoying coffee"
              className="w-[170px] h-auto object-cover"
            />
          </div>

          {/* Image Card 2 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={kaca}
              alt="Coffee shop seating"
              className="w-[170px] h-auto object-cover"
            />
          </div>

          {/* Image Card 3 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={couple}
              alt="Couple at the cafe"
              className="w-[227px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={caffe}
              alt="Customers enjoying coffee"
              className="w-[245px] h-auto object-cover"
            />
          </div>

          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={customer}
              alt="Customer enjoying coffee"
              className="w-[170px] h-auto object-cover"
            />
          </div>

          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={kaca}
              alt="Coffee shop seating"
              className="w-[170px] h-auto object-cover"
            />
          </div>

           {/* Image Card 4 */}
           <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={caffe}
              alt="Customers enjoying coffee"
              className="w-[245px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Tombol Panah Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          &#8594;
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-lg text-white italic mt-8">Your Second Home</p>
    </div>
  );
};

export default Gallery;
