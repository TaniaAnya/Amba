import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Coffee");
  const [image, setImage] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [editItem, setEditItem] = useState(null);  //  menyimpan item yang  diedit

  // Ambil data menu dari firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "menus"), (snapshot) => {
      const menuData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMenuItems(menuData);
    });
    return () => unsubscribe();
  }, []);

  // upload gambar ke cloudinary dan simpan URL ke firebase
  const uploadImageToCloudinary = async (imageFile) => {
    const cloudName = "dvnriwaci"; 
    const uploadPreset = "product_photos";  
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      }
      throw new Error("Error uploading image to Cloudinary");
    } catch (error) {
      console.error("Upload gagal:", error);
      return null;
    }
  };

  // menambahkan atau memperbarui menu
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      imageUrl = await uploadImageToCloudinary(image);
    }

    try {
      if (editItem) {
        // Update menu yang sedang diedit
        const menuRef = doc(db, "menus", editItem.id);
        await updateDoc(menuRef, {
          title,
          description,
          price,
          category,
          image: imageUrl || editItem.image,  // Jika gambar baru tidak ada, gunakan gambar lama
        });
        setEditItem(null);  // Reset edit item
      } else {
        // Tambah menu baru
        await addDoc(collection(db, "menus"), {
          title,
          description,
          price,
          category,
          image: imageUrl,
        });
      }

      // Reset form setelah submit
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("Coffee");
      setImage(null);
    } catch (error) {
      console.error("Error submitting menu:", error);
    }
  };

  // mengedit item menu
  const handleEdit = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setPrice(item.price);
    setCategory(item.category);
    setImage(null); // set image ke null biar admin bisa milih gambar baru
    setEditItem(item); // set item yang mau diedit
  };

  // menghapus menu
  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus menu ini?")) {
      try {
        await deleteDoc(doc(db, "menus", id));
        setMenuItems(menuItems.filter((item) => item.id !== id)); // update UI setelah dihapus
      } catch (error) {
        console.error("Gagal menghapus menu:", error);
      }
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <nav className="w-1/5 bg-gray-200 shadow-md p-4">
        <h1 className="text-xl font-bold mb-8">Kopi Amba</h1>
        <nav className="space-y-4">
          <Link to={"/admin/menu"} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">
            <span>📃</span> Menu
          </Link>
          <Link to={"/admin/promo"} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">
            <span>%</span> Promotion
          </Link>
          <Link to={"/admin/gallery"} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">
            <span>🖼</span> Gallery
          </Link>
          <Link to={"/admin/information"} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">
            <span>ℹ</span> Information
          </Link>
        </nav>
      </nav>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full mb-2"
          >
            <option value="Coffee">Coffee</option>
            <option value="Non-Coffee">Non-Coffee</option>
            <option value="Snack">Snack</option>
          </select>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 w-full mb-2"
          />
          <button type="submit" className="bg-yellow-700 hover:bg-yellow-900 text-white p-2 w-full">
            {editItem ? "Update Menu" : "Add Menu"}
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Menu List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
                <p className="font-bold">{item.price}</p>
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover mt-2" />
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white p-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
