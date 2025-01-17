import React from 'react';

const AdmInformation = () => {
  const cards = [
    { id: 1, title: "Information", text: "Ini adalah teks deskripsi untuk kartu 1." },
    { id: 2, title: "Information", text: "Ini adalah teks deskripsi untuk kartu 2." },
    { id: 3, title: "Information", text: "Ini adalah teks deskripsi untuk kartu 3." },
    { id: 3, title: "Information", text: "Ini adalah teks deskripsi untuk kartu 3." },
    { id: 4, title: "Information", text: "Ini adalah teks deskripsi untuk kartu 4." },
    { id: 4, title: "Information", text: "Ini adalah teks deskripsi untuk kartu 4." },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-teal-300 h-screen p-5">
        <div className="text-lg font-bold mb-5">KOPI AMBA</div>
        <ul className="space-y-3">
          <li className="text-gray-700">Menu</li>
          <li className="text-gray-700">Promotion</li>
          <li className="text-gray-700">Gallery</li>
          <li className="text-gray-700 font-bold">Information</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Information</h1>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 font-bold">AMBA</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div className="flex justify-center items-center mb-5">
                </div>
                <div>
                <h2 className="font-bold text-gray-800 mb-2">{card.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{card.text}</p>
              </div>
              <button className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm">
                Done
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmInformation;