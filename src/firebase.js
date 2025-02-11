// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd3nR4KLFtY0Vwnk9zwCStVgfOJdQAuVg",
  authDomain: "amba-d664c.firebaseapp.com",
  projectId: "amba-d664c",
  storageBucket: "amba-d664c.firebasestorage.app",
  messagingSenderId: "949527943482",
  appId: "1:949527943482:web:78ea24e1975feecfe25803",
  measurementId: "G-HDLTBGX82V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };