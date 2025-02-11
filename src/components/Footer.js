import React from "react";
import Kopi from '../asset/kopi.png';
import shopeeFood from './asset/shopeeFood.png'; // Perbaiki path asset

const Footer = () => {
  return (
    <div id="footer">
      {/* Background Section */}
      <section id="about" className="relative w-full h-96">
        {/* Background Image */}
        <img src={Kopi} alt="Coffee Beans" className="w-full h-96 object-cover" />

        {/* Footer Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">

          {/* Contact Title */}
          <h2 className="text-2xl font-bold mb-2">Contact</h2> {/* Kurangi margin bawah */}
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a href="https://wa.me/089682227565" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp text-4xl text-green-400 hover:text-green-300"></i>
            </a>
            <a href="https://instagram.com/kopiamba" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-4xl text-pink-400 hover:text-pink-300"></i>
            </a>
            <a href="https://shopee.co.id/universal-link/now-food/shop/21550294?deep_and_deferred=1&shareChannel=copy_link" target="_blank" rel="noopener noreferrer">
              <img src={shopeeFood} alt="Shopee" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="https://maps.google.com/?q=Your+kopi+amba" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt text-4xl text-red-500 hover:text-red-400"></i>
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-sm">
            Kopi Amba ©2024{" "}
            <span className="text-orange-400">JL Ketileng Indah Raya 1, Sendangmulyo 50272</span> Telp:{" "}
         < a 
         href="https://wa.me/089682227565"
         className="text-orange-400  hover : underline hover: text-white"
         >+62 89682227565
         <p className="text-sm"></p>
         </a>
            <span className="text-orange-400">All Rights Reserved</span>
          </p>

          {/* Footer Links */}
          <div className="flex justify-center space-x-4 mt-2 text-xs font-semibold">
            <a href="/articles" className="hover:underline text-white">ARTICLES</a>
            <span className="text-white">•</span>
            <a href="/copyright-policy" className="hover:underline text-white">COPYRIGHT POLICY</a>
            <span className="text-white">•</span>
            <a href="/careers" className="hover:underline text-white">CAREERS</a>
          </div>

          {/* Developer Credit */}
          <p className="mt-2 text-xs text-orange-400">
            Design & Developed by <span className="text-red-400 font-semibold">Powerpuff</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;