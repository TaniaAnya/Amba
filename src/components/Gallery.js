import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 
import { Link, useNavigate } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  // Fungsi untuk mengambil data gambar dari Firestore
  const fetchGalleryImages = async () => {
    const querySnapshot = await getDocs(collection(db, "galleries"));
    const images = querySnapshot.docs.map((doc) => doc.data());
    setGalleryImages(images);
  };

  useEffect(() => {
    fetchGalleryImages(); // Ambil data saat komponen dimuat
  }, []);

  return (
    <div className="bg-yellow-900 min-h-screen flex flex-col items-center justify-center py-20">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-white mb-8">Our Gallery</h1>
      <div className="absolute top-0 left-0 m-4">
        <Link to={'/'}>
          <button className="text-white text-sm font-semibold">
            <CircleArrowLeft />
          </button>
        </Link>
      </div>

      {/* Gallery Container with horizontal scrolling */}
      <div className="w-full max-w-6xl overflow-hidden px-4">
        <div className="flex space-x-6 overflow-x-scroll no-scrollbar">
          {galleryImages.length > 0 ? (
            galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[250px]">
                {/* Wrapper dengan rasio 3:4 */}
                <div className="relative w-[250px] h-[333px] overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={`Gallery ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/250x333")}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No images available</p>
          )}
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-lg text-white italic mt-10">Your Second Home</p>
    </div>
  );
};

export default Gallery;
