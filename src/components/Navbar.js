import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-transparent p-4 fixed w-full top-0 left-0 z-50">
            <div className="container flex justify-between items-center border rounded-full p-4">
                <h1 className="text-white text-3xl font-bold">KopiAmba</h1>
                    <div>
                        <a href="#about" className="text-gray-300 hover mx-4 transition duration-300">About Us</a>
                        <a href="#information" className="text-gray-300 hover mx-4 transition duration-300">Information</a>
                        <a href="#contact" className="text-gray-300 hover mx-4 transition duration-300">Contact</a>
                        <a href="/admin" className="text-gray-300 hover mx-4 transition duration-300">Admin</a>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;
