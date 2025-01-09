import React from "react";
import about from '../asset/about.jpg'

const About = () => {
  return (
    <section id="about">
    <div className="relative w-full h-screen">
      {/* background */}
      <img
        src={about}
        alt="Coffee Machine"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="bg-white bg-opacity-60 text-center p-6 rounded-3xl shadow-lg max-w-2xl">
          <p className="text-lg font-medium text-gray-800">
            A new place to call home. Kopi Amba your second home, itulah slogan
            dari kami. Menggunakan pilihan kopi yang berkualitas adalah kami.
            Enjoy every moment, enjoy our drunk and don't forget to bring your
            friends!
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;