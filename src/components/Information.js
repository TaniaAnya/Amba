import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background3 from "../components/asset/background3.png"; // Pastikan path gambar benar

const Information = () => {
  const [information, setInformation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Real-time listener untuk Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "informations"),
      (snapshot) => {
        const data = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((item) => item.title && item.description); // Filter data yang memiliki title & description

        setInformation(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load information. Please try again later.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 bg-black">
        {error}
      </div>
    );
  }

  // Konfigurasi slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000, // 2 detik
  };

  return (
    <section
      id="information"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background3})`, // Tambahkan background gambar
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Container utama agar konten berada di tengah */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl text-white font-bold mb-10">Current Information</h1>

        <div className="w-full max-w-lg">
          <Slider {...sliderSettings}>
            {information.length > 0 ? (
              information.map((info) => (
                <div
                  key={info.id}
                  className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center"
                >
                  <h3 className="text-2xl mb-4 text-[#621A3D] font-semibold">{info.title}</h3>
                  <p className="text-md font-medium text-[#621A3D]">{info.description}</p>
                </div>
              ))
            ) : (
              <p className="text-white text-md">No valid information available at the moment.</p>
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Information;
