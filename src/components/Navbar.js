import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu
    };

    return (
        <nav className="bg-transparent p-4 fixed w-full top-2 z-50 items-center justify-center border rounded-full">
            <div className="px-4 items-center flex justify-between">
                <h1 className="text-white text-xl md:text-3xl font-bold">KopiAmba</h1>

                {/* Menu Hamburger (untuk layar kecil) */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {/* Tampilkan ikon hamburger jika menu tertutup, ikon X jika menu terbuka */}
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu Desktop */}
                <div className="hidden lg:flex gap-5 ml-auto">
                    <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About Us</a>
                    <a href="#information" className="text-gray-300 hover:text-white transition duration-300">Information</a>
                    <a href="#footer" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
                   <Link to={'/login'} className="text-gray-300 hover:text-white transition duration-300">Admin</Link>
                </div>
            </div>

            {/* Menu Mobile - Muncul dari kanan */}
                    <div className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-black bg-opacity-80 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="lg:hidden flex flex-row justify-between px-4">
                    <button onClick={toggleMenu} className="text-white">
                        {/* Tampilkan ikon hamburger jika menu tertutup, ikon X jika menu terbuka */}
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                    <a href="" className="lg:hidden mt-5 block mb-5 py-2">
                        <h1 className="font-bold text-2xl text-white">Kopi Amba</h1>
                    </a>  
                </div>
                <div className="flex flex-col h-full items-start ml-4">
                    <a href="#about" className="text-gray-300 hover:text-white transition duration-300 py-2">About Us</a>
                    <a href="#information" className="text-gray-300 hover:text-white transition duration-300 py-2">Information</a>
                    <a href="#footer" className="text-gray-300 hover:text-white transition duration-300 py-2">Contact</a>
                    <a href="#admin" className="text-gray-300 hover:text-white transition duration-300 py-2">Admin</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
