import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; 
import kopiku from "./asset/kopiku.png";
import background from "../components/asset/background.png";
import { CircleArrowLeft } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const adminRef = doc(db, "admins", user.uid);
      const adminSnap = await getDoc(adminRef);

      if (adminSnap.exists()) {
        alert("Login berhasil! Anda adalah admin.");
        navigate("/admin/menu");
      } else {
        throw new Error("Anda tidak memiliki akses admin.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="information"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Tombol Kembali */}
      <div className="text-white absolute top-4 left-4">
        <button onClick={() => navigate("/")}>
          <CircleArrowLeft />
        </button>
      </div>

      {/* Form Login */}
      <div className="bg-white bg-opacity-80 shadow-transparent rounded-xl px-8 py-6 flex flex-col items-center w-[320px] sm:w-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={kopiku} alt="logo amba" className="h-[100px]" />
        </div>

        {/* Admin Info */}
        <div className="bg-gray-700 text-white py-1 px-3 rounded-full flex items-center justify-center w-[150px] shadow-lg mb-4">
          <span className="font-semibold text-xs text-center">Only Admin</span>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full">
          {/* Email */}
          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-600"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-600"
              required
            />
          </div>

          {/* Pesan Error */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          {/* Tombol Login */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-20 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 w-full text-center"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
