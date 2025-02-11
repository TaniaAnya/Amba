import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Tambahkan ini

const firebaseConfig = {
  apiKey: "AIzaSyCd3nR4KLFtY0Vwnk9zwCStVgfOJdQAuVg",
  authDomain: "amba-d664c.firebaseapp.com",
  projectId: "amba-d664c",
  storageBucket: "amba-d664c.appspot.com",
  messagingSenderId: "949527943482",
  appId: "1:949527943482:web:78ea24e1975feecfe25803",
  measurementId: "G-HDLTBGX82V",
};

// Cegah Firebase agar tidak diinisialisasi ulang
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app); // Tambahkan ini

export { app, db, storage }; // Pastikan storage diekspor
