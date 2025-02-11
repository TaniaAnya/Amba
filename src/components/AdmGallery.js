import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { CircleArrowLeft } from "lucide-react";

const AdmGallery = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [images, setImages] = useState([]);

  const cloudName = "dvnriwaci";
  const uploadPreset = "product_photos";

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "galleries"));
      const imageList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imageList);
    };
    fetchImages();
  }, []);

  const handleUploadImage = async () => {
    if (!imageFile || !title.trim()) return;
    setUploading(true);
    setSuccessMessage("");
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!data.secure_url) throw new Error("Upload failed");
      const docRef = await addDoc(collection(db, "galleries"), {
        title: title,
        url: data.secure_url,
      });
      setImages([...images, { id: docRef.id, title: title, url: data.secure_url }]);
      setImageFile(null);
      setTitle("");
      setSuccessMessage("✅ Gambar berhasil diunggah!");
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await deleteDoc(doc(db, "galleries", id));
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-1/5 bg-gray-200 p-4">
        <h1 className="text-xl font-bold mb-8">KOPI AMBA</h1>
        <nav className="space-y-4">
          <Link to="/admin/menu" className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">📃 Menu</Link>
          <Link to="/admin/promo" className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">% Promotion</Link>
          <Link to="/admin/gallery" className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">🖼 Gallery</Link>
          <Link to="/admin/information" className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">ℹ Information</Link>
        </nav>
      </div>
      <div className="w-4/5 p-6 bg-gray-100">
        <header className="mb-6">
          <button className="text-gray-600 hover:text-black" onClick={() => navigate("/login")}>
            <CircleArrowLeft/>
          </button>
        </header>
        <div className="flex gap-4 flex-wrap">
          <div className="w-72 h-80 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-white relative p-4">
            <label htmlFor="file-upload" className="w-full h-56 flex flex-col items-center justify-center cursor-pointer border rounded-lg bg-gray-100">
              {imageFile ? (
                <img src={URL.createObjectURL(imageFile)} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-gray-400 text-6xl">+</span>
              )}
            </label>
            <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={(e) => setImageFile(e.target.files[0])} />
            <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border px-3 py-2 mt-2 text-center text-sm w-full rounded" />
            <button onClick={handleUploadImage} className={`mt-3 px-4 py-2 text-white rounded-lg w-full ${uploading ? "bg-gray-400" : "bg-yellow-700 hover:bg-yellow-900"}`} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          {images.map((image) => (
            <div key={image.id} className="relative w-72 h-80 border rounded-lg shadow-md bg-white flex flex-col items-center p-4">
              <img src={image.url} alt="Gallery" className="w-full h-56 object-cover rounded-lg" />
              <p className="text-sm font-semibold mt-3">{image.title}</p>
              <button onClick={() => handleDeleteImage(image.id)} className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">✕</button>
            </div>
          ))}
        </div>
        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
      </div>
    </div>
  );
};

export default AdmGallery;
