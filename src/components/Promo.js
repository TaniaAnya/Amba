import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";

const Promo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetchPromos();
  }, []);

  const fetchPromos = async () => {
    const querySnapshot = await getDocs(collection(db, "promos"));
    const promoList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPromos(promoList);
  };

  return (
    <div className="bg-yellow-800 min-h-screen flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold text-white mb-10">PROMO</h1>
       <div className="absolute top-0 left-0 m-4">
              <Link to={'/'}>
                <button className="text-white text-sm font-semibold">
                  <CircleArrowLeft />
                </button>
              </Link>
            </div>
      <div className="w-full max-w-6xl overflow-hidden px-4">
        <div className="flex space-x-6 overflow-x-scroll no-scrollbar">
          {promos.map((promo) => (
            <div key={promo.id} className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[250px]">
              <div className="relative w-[250px] h-[333px] overflow-hidden rounded-lg">
                <img
                  src={promo.url}
                  alt="Promo"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/250x333")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg text-white italic mt-10">Your Second Home</p>
    </div>
  );
};

export default Promo;
