import React from "react";

const Information = () => {
    return (
        <section id="information" className="relative h-screen ">
        <div className="bg-[#74512D] min-h-screen flex flex-col items-center pt-20 relative"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
                    <div className="bg-white bg-opacity-60 text-center p-6 rounded-3xl shadow-lg max-w-md py-10 ">
                        <h3 className="text-2xl mb-4 text-[#621A3D] font-semibold">WE ARE HIRING</h3>
                        <p className="text-md font-medium text-[#621A3D]">
                            sama kayak kidi project jadi admin bisa nambahin informasi kayak misal buka lowongan / buka telat / libur
                        </p>
                    </div>
        
                </div>
        </section>
    )
};

export default Information;