// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDRUm46AYAYQjXFckUmCXTMY3Y6lTX5J28",
  authDomain: "linkproject40.firebaseapp.com",
  projectId: "linkproject40",
  storageBucket: "linkproject40.appspot.com",
  messagingSenderId: "162265436405",
  appId: "1:162265436405:web:8b6d2441d048d85022f5bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
