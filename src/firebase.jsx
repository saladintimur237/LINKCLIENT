// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBMJ2hTUNaHKYGKrM8494W6WW9d7cw6Zv4",
  authDomain: "linkproject17.firebaseapp.com",
  projectId: "linkproject17",
  storageBucket: "linkproject17.appspot.com",
  messagingSenderId: "972919652206",
  appId: "1:972919652206:web:f8d7b3f70cfa737fdd4b7f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
