import React from "react";
import cover from '../asset/cover.jpg';

const Home = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${cover})` }}>
            
            <div className="bg-black bg-opacity-20 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-7xl font-bold mb-9">SPECIAL COFFEESHOP</h2>
                    <p className="text-4xl mb-8">Your Second Home</p>
                        <a href="#about" className="bg-gradient-to-r from-[#945a2d] to-[#ecb480] hover:bg-yellow-900 text-white font-bold py-4 px-10 rounded-xl shadow-lgm transition duration-300">
                            Kami Tunggu Kedatanganmu
                        </a>
            </div>
        </section>
    );
}

export default Home;