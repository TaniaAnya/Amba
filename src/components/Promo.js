import React, { useRef } from "react";
import Ppilkada from "./asset/Ppilkada.jpg";
import Pbola from "./asset/Pbola.jpg";
import Psumpah from "./asset/Psumpah.jpg";
import Pkopi from "./asset/Pkopi.jpg";

const Promo = () => {
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
    <div className="bg-yellow-800 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-white mb-8">PROMO</h1>

      {/* Gallery Container with horizontal scrolling */}
      <div className="relative">
        {/* Tombol Panah Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 text-white p-2 rounded-full shadow-lg"
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
              src={Ppilkada}
              alt="Promo 1"
              className="w-[280px] h-auto object-cover"
            />
          </div>

          {/* Image Card 2 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Pbola}
              alt="Promo 2"
              className="w-[168px] h-auto object-cover"
            />
          </div>

          {/* Image Card 3 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Psumpah}
              alt="Promo 3"
              className="w-[168px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Pkopi}
              alt="Promo 4"
              className="w-[224px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Psumpah}
              alt="Promo 4"
              className="w-[168px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Ppilkada}
              alt="Promo 4"
              className="w-[280px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Pbola}
              alt="Promo 4"
              className="w-[168px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Pkopi}
              alt="Promo 4"
              className="w-[224px] h-auto object-cover"
            />
          </div>

          {/* Image Card 4 */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start">
            <img
              src={Psumpah}
              alt="Promo 4"
              className="w-[168px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Tombol Panah Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 text-white p-2 rounded-full shadow-lg"
        >
          &#8594;
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-lg text-white italic mt-8">
        Rasakan Rumah Keduamu Bersama Kopi Amba
      </p>
    </div>
  );
};

export default Promo;
