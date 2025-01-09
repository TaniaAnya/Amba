import React from "react";
import Kopi from '../asset/kopi.png';

const Footer = () => {
  return (
    <div>
      {/* Background Section */}
      <section id="about" className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={Kopi}
          alt="Coffee Beans"
          className="w-full h-full object-cover"
        />

        {/* Contact Section */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
  <h2 className="text-2xl font-bold">Contact</h2>
  <div className="flex justify-center space-x-6 mt-6">
    <a href="https://wa.me/085520950976" target="_blank" rel="noopener noreferrer" className="text-3xl text-green-400 hover:text-green-300">
      <i className="fab fa-whatsapp"></i>
    </a>
    <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-400 hover:text-blue-300">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="mailto:contact@example.com" className="text-3xl text-red-400 hover:text-red-300">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://instagram.com/tan_ia126" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-400 hover:text-pink-300">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://maps.google.com/?q=Your+Location" target="_blank" rel="noopener noreferrer" className="text-3xl text-red-500 hover:text-red-400">
      <i className="fas fa-map-marker-alt"></i>
    </a>
  </div>
</div>

        {/* Footer Section Inside Background */}
            <footer className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-6 text-center text-white">
                <p className="text-white">Kopi Amba ©2024</p>
                <p className="text-orange-400">Jl. Ketileng Indah Raya 1, Sendangmulyo 50272 Telp: +62 0988557</p>
                <p className="text-white">All Rights Reserved</p>
                <div className="flex justify-center space-x-4 mt-4 text-sm">
                    <a href="/articles" className="hover:underline text-white">Articles</a>
                    <span className="text-white">|</span>
                    <a href="/copyright-policy" className="hover:underline text-white">Copyright Policy</a>
                    <span className="text-white">|</span>
                    <a href="/careers" className="hover:underline text-white">Careers</a>
                </div>
                <p className="mt-4 text-xs text-orange-400">Design & Developed by Powerpuff</p>
            </footer>
      </section>
    </div>
  );
};

export default Footer;