// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAm_wtyw6Q3i_PFtmeHvKRyDYKg23hNkyY",
  authDomain: "linkproject41.firebaseapp.com",
  projectId: "linkproject41",
  storageBucket: "linkproject41.appspot.com",
  messagingSenderId: "779139695135",
  appId: "1:779139695135:web:28d44ecdca329a27388b2a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
