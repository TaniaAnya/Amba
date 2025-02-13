import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CircleArrowLeft } from "lucide-react";

const AdmInformation = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Fetch data from Firestore
  const fetchInformation = async () => {
    const querySnapshot = await getDocs(collection(db, "informations"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCards(data);
  };

  // Add new information
  const handleAddInformation = async () => {
    if (newTitle && newDescription) {
      await addDoc(collection(db, "informations"), {
        title: newTitle,
        description: newDescription,
      });
      setNewTitle("");
      setNewDescription("");
      fetchInformation();
    }
  };

  // Delete information by ID
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "informations", id));
    fetchInformation();
  };

  // Start edit mode
  const startEdit = (card) => {
    setIsEditing(card.id);
    setEditTitle(card.title);
    setEditDescription(card.description);
  };

  // Update information by ID
  const handleUpdate = async () => {
    if (!isEditing) return;
    await updateDoc(doc(db, "informations", isEditing), {
      title: editTitle,
      description: editDescription,
    });
    setIsEditing(null);
    fetchInformation();
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 h-screen p-4">
        <div className="text-xl font-bold mb-8">KOPI AMBA</div>
        <nav className="space-y-4">
          <Link to={'/admin/menu'} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">📃 Menu</Link>
          <Link to={'/admin/promo'} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">% Promotion</Link>
          <Link to={'/admin/gallery'} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">🖼 Gallery</Link>
          <Link to={'/admin/information'} className="flex items-center gap-2 text-gray-600 hover:text-amber-950 font-semibold">ℹ Information</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-5">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate("/login")} className="mb-4 flex items-center text-gray-600 hover:text-black"><CircleArrowLeft/></button>
          <h1 className="text-xl font-bold">Information</h1>
        </div>

        <div className="mt-5 flex gap-3">
          <input type="text" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="border rounded p-2" />
          <input type="text" placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="border rounded p-2" />
          <button onClick={handleAddInformation} className="bg-yellow-600 hover:bg-yellow-800 text-white py-2 px-4 rounded-full">Add</button>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between">
              {isEditing === card.id ? (
                <>
                  <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="text-lg font-semibold text-gray-800 mb-2 border p-2 rounded-md" />
                  <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="w-full text-sm text-gray-600 mb-3 p-2 border rounded-md" />
                  <button onClick={handleUpdate} className="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded-full">Save</button>
                  <button onClick={() => setIsEditing(null)} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full mt-2">Cancel</button>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
                  <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                  <button onClick={() => startEdit(card)} className="bg-yellow-700 hover:bg-yellow-900 text-white py-2 px-4 rounded-full">Edit</button>
                  <button onClick={() => handleDelete(card.id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full mt-2">Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmInformation;
