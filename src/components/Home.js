import React from "react";
import cover from '../asset/cover.jpg';

const Home = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${cover})` }}>
            
            <div className="bg-black bg-opacity-20 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-5xl font-bold mb-4">SPECIAL COFFEESHOP</h2>
                    <p className="text-2xl mb-8">Your Second Home</p>
                        <a href="#about" className="bg-gradient-to-r from-[#2C1F1F] to-[#926666] hover:bg-yellow-900 text-white font-bold py-2 px-6 rounded-3xl shadow-lgm transition duration-300">
                            Show more
                        </a>
            </div>
        </section>
    );
}

export default Home;