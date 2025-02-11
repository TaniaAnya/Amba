import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { CircleArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const FoodMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "menus"), where("category", "==", "Coffee"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const menuData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMenuItems(menuData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-yellow-800 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-stone-100 mb-8">Coffee Series</h1>
      <div className="absolute top-0 left-0 m-4">
        <Link to={'/'}>
          <button className="text-white text-sm font-semibold">
            <CircleArrowLeft />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-stone-50 rounded-lg shadow-lg overflow-hidden">
            <img src={item.image || "https://via.placeholder.com/100"} alt={item.name} className="w-full h-72 object-cover" />
            <div className="p-4">
              {/* Title above the description */}
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2> {/* Title */}
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="text-lg font-bold text-gray-800">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
