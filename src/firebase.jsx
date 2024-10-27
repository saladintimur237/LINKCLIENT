// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCQwsZGKRz_OfWIrz4ApLVAm0YIOsIcPCs",
  authDomain: "linkproject39.firebaseapp.com",
  projectId: "linkproject39",
  storageBucket: "linkproject39.appspot.com",
  messagingSenderId: "176269569404",
  appId: "1:176269569404:web:7b0ee5db6b66c4c3f808f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
